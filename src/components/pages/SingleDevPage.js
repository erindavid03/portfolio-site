import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function SingleDevPage() {
  return (
    <>
        <section>
          <h1>Single Dev Sample</h1>  
          <div>
            <img src='https://i.kym-cdn.com/photos/images/newsfeed/002/205/307/1f7.jpg' />
            <div>
                <h2>General Statement</h2>
                <p>This is a general statement wow!! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus deserunt, laboriosam quibusdam, sunt dicta deleniti earum veniam nisi quam facere itaque tempora sequi ad vero laudantium repellendus sit inventore eum?</p>
                <div>
                    <a href="">View Site</a>
                    <a href="">View Code</a>
                </div>
            </div>
          </div>
        </section>

        <section>
            <Tabs class='content-tabs' aria-label='tabs'>
                <TabList>
                <Tab>About This Piece</Tab>
                <Tab>Reflection</Tab>
                <Tab>In Progress Pictures</Tab>
                </TabList>

                <TabPanel>
                <h2>About 'TITLE'</h2>
                <p>This is stuff about the piece. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quasi explicabo fuga ex. Repudiandae, itaque quae cum suscipit atque perspiciatis. Fugit iure aut molestias aliquam odio dolorum quidem ducimus ab?</p>
                </TabPanel>
                <TabPanel>
                <h2>Reflection</h2>
                <p>This is a reflection. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur officia ut, ullam cupiditate eos velit? Illo est aspernatur facilis qui consectetur necessitatibus inventore cum eaque, alias atque optio cupiditate animi?</p>
                </TabPanel>
                <TabPanel>
                <h2>In Progress</h2>
                <p>Here are pictures during the progress</p>
                <div>
                    <img src='https://i.kym-cdn.com/photos/images/newsfeed/002/205/307/1f7.jpg' />
                    <img src='https://i.kym-cdn.com/photos/images/newsfeed/002/205/307/1f7.jpg' />
                    <img src='https://i.kym-cdn.com/photos/images/newsfeed/002/205/307/1f7.jpg' />
                    <img src='https://i.kym-cdn.com/photos/images/newsfeed/002/205/307/1f7.jpg' />
                    <img src='https://i.kym-cdn.com/photos/images/newsfeed/002/205/307/1f7.jpg' />
                    <img src='https://i.kym-cdn.com/photos/images/newsfeed/002/205/307/1f7.jpg' />
                    <img src='https://i.kym-cdn.com/photos/images/newsfeed/002/205/307/1f7.jpg' />
                    <img src='https://i.kym-cdn.com/photos/images/newsfeed/002/205/307/1f7.jpg' />
                </div>

                </TabPanel>
            </Tabs>
        </section>
    </>

  )
}

export default SingleDevPage