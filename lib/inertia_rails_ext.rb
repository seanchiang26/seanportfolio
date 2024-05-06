# typed: strict
# frozen_string_literal: true

require "inertia_rails"

module InertiaRails
  module Helper
    def inertia_assets(**options)
      component = InertiaRails.page&.fetch(:component)
      return unless component.is_a?(String)
      name = component + ".jsx"
      path = File.join("pages", name)
      vite_javascript_tag(path, **options)
    end
  end

  class Renderer
    module Patch
      def initialize(...)
        super
        ::InertiaRails.page = page
      end
    end

    prepend Patch
  end


  thread_mattr_accessor :threadsafe_page

  def self.page
    threadsafe_page
  end

  def self.page=(page)
    self.threadsafe_page = page
  end

  class << self
    # Clear threadsafe page when resetting.
    module Patch
      def reset!
        super
        self.threadsafe_page = nil
      end
    end
    prepend Patch
  end
end
