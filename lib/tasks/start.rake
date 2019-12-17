namespace :start do
  desc 'Start dev server'
  task :development do
    exec 'foreman start -f Procfile_dev'
  end

  desc 'Start production server'
  task :production do
    exec 'NPM_CONFIG_PRODUCTION=true npm run postinstall && foreman start'
  end
end
task :start => 'start:development'

# now we can boot up with rake start
# had to change notation from exec('bundle exec') to This
# because foreman can't be added to bundle per documentation
