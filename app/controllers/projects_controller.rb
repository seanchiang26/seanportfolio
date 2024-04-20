class ProjectsController < ApplicationController
  include Auth

  before_action :set_project, only: %i[ show edit update destroy ]
  skip_before_action :authenticate_user!, only: %i[ index show ]

  # GET /projects or /projects.json
  def index
    projects = Project.all
    render inertia: 'Projects.Index', props: {
      projects: projects.as_json(
        only: [:id, :title]
      )
    }
  end

  # GET /projects/1 or /projects/1.json
  def show
    render inertia: 'Projects.Show', props: {
      project: @project.as_json(
        only: [:id, :title, :body]
      )
    }
  end

  # GET /projects/new
  def new
    render inertia: 'Projects.New'
  end

  # GET /projects/1/edit
  def edit
    render inertia: 'Projects.Edit', props: {
      project: @project.as_json(
        only: [:id, :title, :body]
      )
    }
  end

  # POST /projects or /projects.json
  def create
    project = Project.new(project_params)

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
      @project = Project.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def project_params
      params.fetch(:project, {}).permit(:title, :body)
    end
end
