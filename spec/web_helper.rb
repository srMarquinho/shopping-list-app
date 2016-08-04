def signup(email: 'test1@example.com', password: 'testtest', password_confirmation: 'testtest')
  visit('/')
  click_link('Sign up')
  fill_in('Email', with: email)
  fill_in('Password', with: password)
  fill_in('Password confirmation', with: password_confirmation)
  click_button('Sign up')
end

def signout
  click_link('Sign out')
end

def signin
  fill_in('Email', with: 'test@example.com')
  fill_in('Password', with: 'testtest')
  click_button('Log in')
end

def add_item(name: 'Shampoo')
  click_link 'add_item'
  fill_in 'Name', with: name
  click_button 'Create Item'
end
