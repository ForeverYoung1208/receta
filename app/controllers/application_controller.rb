class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
###  protect_from_forgery with: :exception
  protect_from_forgery with: :null_session

  rescue_from ActiveRecord::RecordNotFound do
    respond_to do |type|
      type.all  { render :nothing => true, :status => 404 }
    end
  end

=begin
   Recipe.create!(name: 'Baked Potato w/ Cheese', 
           instructions: "nuke for 20 minutes")

    Recipe.create!(name: 'Baked Brussel Sprouts',
           instructions: 'Slather in oil, and roast on high heat for 20 minutes')
=end           

end
