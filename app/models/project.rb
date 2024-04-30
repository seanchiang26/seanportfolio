class Project < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged

  acts_as_taggable_on :tags

  validates :title, presence: true
  validates :body, presence: true
end
