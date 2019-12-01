task :start do
  Bundler.clean_system('foreman start -p 3000')
end

# now we can boot up with rake start
# had to change notation from exec('bundle exec') to This
# because foreman can't be added to bundle per documentation
