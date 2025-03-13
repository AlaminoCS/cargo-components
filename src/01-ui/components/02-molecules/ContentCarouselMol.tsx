import React from 'react'
import { IOurServices } from '../../../02-domain/interfaces/IOurServices'

const ContentCarouselMol: React.FC = () => {
  const ourServices: IOurServices[] = [
    {
      image: '#',
      title: 'Administração de garagem',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae consequuntur fuga officia sit ab deserunt quod est distinctio nihil nostrum esse fugit quam voluptatem tempore, eum hic aut placeat magnam.',
    },
    {
      image: '#',
      title: 'Vallet e SelfPark',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae consequuntur fuga officia sit ab deserunt quod est distinctio nihil nostrum esse fugit quam voluptatem tempore, eum hic aut placeat magnam.',
    },
    {
      image: '#',
      title: 'Implantação',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae consequuntur fuga officia sit ab deserunt quod est distinctio nihil nostrum esse fugit quam voluptatem tempore, eum hic aut placeat magnam.',
    },
  ]

  return (
    <>
      {ourServices.map((item: IOurServices, index: number) => {
        return (
          <div className="card" key={index}>
            <figure>
              <img src={item.image} alt={item.image} />
            </figure>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        )
      })}
    </>
  )
}

export default ContentCarouselMol
