class Customer < ApplicationRecord
    has_many :products
    has_many :inventory , through :products
end
