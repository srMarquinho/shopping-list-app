require 'rails_helper'

feature 'ZZZ completes item' do

  # let!(:shampoo){ Item.create(name:'Shampoo', description: 'Herbal essences', completed: false) }

  context 'completing items' do

      scenario 'user can click a checkbox to complete an item', js:true  do
        signup
        click_link 'Add an item'
        fill_in 'Name', with: 'Shampoo'
        click_button 'Create Item'
        check("Shampoo")
        sleep(1.seconds)
        expect(Item.last.completed).to eq true
      end
    end

end