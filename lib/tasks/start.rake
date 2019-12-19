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

# now we can boot up with rake start OR rake start:production
# the first will be on localhost:3000 & localhost:3001
# the latter will be hosted on localhost:5000 w/no proxy
