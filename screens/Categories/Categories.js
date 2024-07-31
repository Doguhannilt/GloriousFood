import { ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import { categories } from '../../library/Category'

const Categories = () => {
    return (
        <ScrollView
            className=" ml-2"
            contentContainerStyle={{
                marginBottom: 0,
                paddingTop: 10
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {categories.map((item, index) => (
                <CategoryCard
                    key={index}
                    imgUrl={item.imageUrl}
                    title={item.Name}
                    id={item.id}
                />
            ))}

        </ScrollView>
    )
}

export default Categories