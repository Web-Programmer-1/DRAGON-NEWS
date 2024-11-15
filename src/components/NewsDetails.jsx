import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Header from './Header'
import RightNav from './layout-component/RightNav'


export default function NewsDetails() {

    const data = useLoaderData()
    const news = data.data[0]
    console.log(news)
    return (
        <div>
            {/* Compo  */}
            <header>
                <Header></Header>
            </header>
            <main className='w-9/12 mx-auto grid grid-cols-12 gap-5 mb-6'>

                <section className='col-span-9'>
                    <div className="card bg-base-100  shadow-xl">
                        <figure className="px-10 pt-10">
                            <img 
                                src={
                                    news?.image_url
                                }
                                alt="News-Photo"
                                className="rounded-xl object-contain" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title">{news?.title}</h2>
                            <p>{news?.details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${news?.category_id}`} className="btn btn-primary">Back to Category</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='col-span-3'>
                    <RightNav></RightNav>
                </section>

            </main>
        </div>
    )
}
