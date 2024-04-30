class ProjectsController < ApplicationController
  before_action :set_project, only: %i[ edit update destroy ]
  after_action :verify_authorized, except: %i[ index show ]

  # GET /projects or /projects.json
  def index
    projects = Project.all
    render inertia: 'Projects.Index', props: {
      projects: projects.as_json(
        only: [:slug, :title, :one_liner, :tag_list, :image_url]
      )
    }
  end

  # GET /projects/1 or /projects/1.json
  def show
    @project = Project.friendly.find(params[:id])

    render inertia: 'Projects.Show', props: {
      project: @project.as_json(
        # only: [:id, :title, :body]
      )
    }
  end

  # GET /projects/new
  def new
    authorize Project.new(project_params)
    render inertia: 'Projects.New'
  end

  # GET /projects/1/edit
  def edit
    render inertia: 'Projects.Edit', props: {
      project: @project.as_json(
        # only: [:id, :title, :body]
      )
    }
  end

  # POST /projects or /projects.json
  def create
    project = Project.new(project_params)
    authorize project

    if project.save
      redirect_to project_path(project), notice: 'Project created.'
    else
      redirect_to new_project_path, inertia: { errors: project.errors }
    end
  end

  # PATCH/PUT /projects/1 or /projects/1.json
  def update
    if @project.update(project_params)
      redirect_to project_path(@project), notice: 'Project was successfully updated.'
    else
      redirect_to edit_project_path(@project), inertia: { errors: @project.errors }
    end
  end

  # DELETE /projects/1 or /projects/1.json
  def destroy
    if @project.destroy
      redirect_to projects_path, notice: 'Project was successfully destroyed.'
    else
      redirect_to projects_path, alert: 'Project cannot be deleted!'
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.friendly.find(params[:id])

      authorize @project
      rescue ActiveRecord::RecordNotFound
      redirect_to projects_path
    end

    # Only allow a list of trusted parameters through.
    def project_params
      params.fetch(:project, {}).permit(:title, :one_liner, :url, :body, tag_list: [])
    end
end
