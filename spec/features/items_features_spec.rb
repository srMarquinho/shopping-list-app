require 'rails_helper'

feature 'items' do
  context 'no items have been added' do
    scenario 'should display a prompt to add an item' do
      visit '/items'
      expect(page).to have_content 'No items yet'
      expect(page).to have_link 'Add an item'
    end
  end

  context 'Items have been added' do
    before do
      Item.create(name: 'Shampoo')
    end

    scenario 'display items' do
      visit '/items'
      expect(page).to have_content('Shampoo')
      expect(page).not_to have_content('No items yet')
    end
  end

  context 'creating items' do
    scenario 'prompts user to fill out a form, then displays the new item' do
      visit '/items'
      click_link 'Add an item'
      fill_in 'Name', with: 'Shampoo'
      click_button 'Create Item'
      expect(page).to have_content 'Shampoo'
      expect(current_path).to eq '/items'
    end
  end

  context 'viewing items' do

    let!(:shampoo){ Item.create(name:'Shampoo') }

    scenario 'lets a user view a item' do
     visit '/items'
     click_link 'Shampoo'
     expect(page).to have_content 'Shampoo'
     expect(current_path).to eq "/items/#{shampoo.id}"
    end
  end

  context 'editing items' do

    before { Item.create name: 'Shampoo', description: 'Herbal essences' }

    scenario 'let a user edit an item' do
     visit '/items'
     click_link 'Edit Shampoo'
     fill_in 'Name', with: 'Shampoo'
     fill_in 'Description', with: 'Herbal essences'
     click_button 'Update Item'
     expect(page).to have_content 'Shampoo'
     expect(page).to have_content 'Herbal essences'
     expect(current_path).to eq '/items'
    end
  end


  context 'deleting restaurants' do

    before { Item.create name: 'Shampoo', description: 'Herbal essences' }

    scenario 'removes an item when a user clicks a delete link' do
      visit '/items'
      click_link 'Delete Shampoo'
      expect(page).not_to have_content 'Shampoo'
      expect(page).to have_content 'Item deleted successfully'
    end

  end


end
