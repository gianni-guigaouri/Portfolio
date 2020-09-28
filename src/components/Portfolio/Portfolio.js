import React, { useState } from 'react'
import './Portfolio.css'

import ItemPortfolio from '../ItemPortfolio'
import FilterTags from '../FilterTags'
import filterTagsData from '../../filterTagsData'

const Portfolio = ({ items }) => {
  const [filteredItems, setFilteredItems] = useState(items)
  const [activeLink, setActiveLink] = useState('ALL')

  const selector = (test) => {
    const data = items.filter(item => item.tags.includes(test))
    setFilteredItems(data)
    setActiveLink(test)
  }

  return (
    <section className='section pt-5' id='portofolio'>
      <div className='container'>
        <div className='text-center'>
          <ul id='filters' className='filters mb-5 mx-auto pl-0'>
            {
              filterTagsData.map((data) => <FilterTags key={data} activeLink={activeLink} data={data} onClick={() => selector(data)} />)
            }

          </ul>
        </div>
        <div className='project-cards row justify-content-center mb-5 isotope'>
          {
            filteredItems.map((item) => <ItemPortfolio key={item.id} item={item} />)
          }
        </div>
      </div>
    </section>
  )
}
export default Portfolio
