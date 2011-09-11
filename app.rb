require 'rubygems'
require 'sinatra'

get '/' do
  @google_key = "ABQIAAAANHXuO2OqrFxB_yD_CHyMKxQqfroClvEr6A3ms4vupJbAbumjlRQ9CQrDpi85cs7TXKQ2d7Oxr4YEug"
  erb :layout
end
