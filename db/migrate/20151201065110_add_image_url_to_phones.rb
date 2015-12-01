class AddImageUrlToPhones < ActiveRecord::Migration
  def change
    add_column :phones, :image_url, :text
  end
end
