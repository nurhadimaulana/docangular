class Api::V1::PhonesController < ApplicationController
  skip_before_action :verify_authenticity_token
  respond_to :json

  def list
    @phones = Phone.all
  end
end