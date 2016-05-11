require 'sinatra'
require 'sinatra/contrib'
require "sinatra/reloader" if development?

get '/' do
  erb :index, :layout => :united_layout
end

get '/peach_three' do
  erb :peach_three, :layout => :united_layout
end

get '/tester' do
  File.read(File.join('public', 'tester.html'))
end