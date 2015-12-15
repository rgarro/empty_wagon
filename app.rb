require 'sinatra'
require 'sinatra/contrib'
require "sinatra/reloader" if development?

get '/' do
  erb :index
end
