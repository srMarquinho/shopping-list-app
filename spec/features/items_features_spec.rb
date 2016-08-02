require 'rails_helper'

feature 'Items' do
  context 'no items have been added' do
    scenario 'should display a prompt to add an item' do
      signup
      expect(page).to have_content 'No items yet'
      expect(page).to have_link 'Add an item'
    end
  end

  context 'Items have been added' do

    scenario 'display items' do
      signup
      add_item
      expect(page).to have_content('Shampoo')
      expect(page).not_to have_content('No items yet')
    end
  end

  context 'creating items' do
    scenario 'prompts user to fill out a form, then displays the new item' do
      signup
      add_item
      expect(page).to have_content 'Shampoo'
      expect(current_path).to eq '/items'
    end

    scenario 'does not allow an item to be created with empty name or location' do
      signup
      add_item(name: 'X')
      expect(page).not_to have_content('X')
      # expect(page).to have_content('error')
    end

    # scenario 'has a location when added by google maps' do
    #   signup
    #   click_link 'Add an item'
    #   fill_in 'Name', with: 'Shampoo'
    #   fill_in 'pac-input', with: '50 Commer, London, United Kingdom'
    #   click_button 'Create Item'
    #   click_link 'Shampoo'
    #   expect(page).to have_content 'Aldgate East Tube'
    # end
  end

  context 'viewing items' do

    scenario 'lets a user view a item' do
     signup
     add_item
     click_link 'Shampoo'
     expect(page).to have_content 'Shampoo'
     expect(current_path).to eq "/items"
    end
  end

  context 'editing items' do

    scenario 'let a user edit an item' do
     signup
     add_item
     click_link 'Edit Shampoo'
     fill_in 'Name', with: 'Shampoo'
     fill_in 'Description', with: 'Herbal essences'
     click_button 'Update Item'
     expect(page).to have_content 'Shampoo'
     expect(page).to have_content 'Herbal essences'
     expect(current_path).to eq '/items'
    end

    scenario 'do not let not owner user edit a restaurant' do
      signup
      add_item
      signout
      signup(email: 'test1@email.com')
      expect(page).not_to have_content 'Shampoo'
    end

  end


  context 'deleting items' do

    scenario 'removes an item when a user clicks a delete link' do
      signup
      add_item
      click_link 'Delete Shampoo'
      expect(page).not_to have_content 'Shampoo'
      expect(page).to have_content 'Item deleted successfully'
    end

    scenario 'do not let not owner user delete a restaurant' do
      signup
      add_item
      signout
      signup(email: 'test1@email.com')
      expect(page).not_to have_content 'Shampoo'
   end

  end

end
