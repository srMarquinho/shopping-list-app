require 'rails_helper'

feature 'ZZZ completes item' do

  context 'completing items' do

      scenario 'user can click a checkbox to complete an item', js:true do
        signup
        add_item
        check("Shampoo")
        sleep(1.seconds)
        expect(Item.last.completed).to eq true
      end
    end

end
