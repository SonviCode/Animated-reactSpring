import React, { useState } from 'react';
import './Scroll.css';
import {Waypoint} from 'react-waypoint'
import {useSpring, animated} from 'react-spring'

const Scroll = () => {

    const [toggleTxt, setToggleTxt] = useState(false);

    const animation = useSpring({
        opacity: toggleTxt ? 1 : 0,
        transform: toggleTxt ? "translateX(0)" : "translateX(-50%)",
    })

    return (
        <div >
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ducimus eligendi tempore optio, aut perferendis quam cum hic rerum facere aliquid ut repudiandae voluptates sequi laudantium quasi odit corrupti excepturi eum itaque autem temporibus eveniet molestias. Fugiat, consectetur? Fuga molestiae sunt voluptas fugit, ipsam laudantium vel, reprehenderit ut temporibus, dolore rem porro laboriosam sapiente delectus minus. Excepturi quibusdam impedit qui aperiam minus laborum, deleniti doloremque iure veniam harum ad deserunt quae at neque ratione, dolorum cupiditate ipsum tenetur quam animi commodi! Quo, velit dolorem inventore libero voluptate perferendis ullam fugiat praesentium commodi aliquam reprehenderit iste deserunt temporibus voluptatum voluptates, laborum ex reiciendis doloremque ducimus explicabo sit odio totam? Reiciendis dolorem maxime praesentium! Sunt saepe aspernatur rerum incidunt, autem commodi, perferendis nostrum soluta praesentium repudiandae molestias tempore recusandae placeat illum quod ab sapiente sequi dignissimos ea fugiat deleniti nesciunt itaque? Quod, possimus reprehenderit. Laborum officia, architecto tempora nisi ut commodi eos corporis minus. Esse voluptas assumenda dolorem consectetur ipsam recusandae nulla ratione iste sapiente reiciendis facere, accusamus aliquid, hic dolores doloribus, iusto unde quaerat impedit? Totam reprehenderit ad mollitia laudantium porro natus esse animi odit aliquam, facere ea. Eos harum voluptas ducimus dignissimos illo. Velit aliquam temporibus deserunt voluptate in? Illum.
            </p>
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ducimus eligendi tempore optio, aut perferendis quam cum hic rerum facere aliquid ut repudiandae voluptates sequi laudantium quasi odit corrupti excepturi eum itaque autem temporibus eveniet molestias. Fugiat, consectetur? Fuga molestiae sunt voluptas fugit, ipsam laudantium vel, reprehenderit ut temporibus, dolore rem porro laboriosam sapiente delectus minus. Excepturi quibusdam impedit qui aperiam minus laborum, deleniti doloremque iure veniam harum ad deserunt quae at neque ratione, dolorum cupiditate ipsum tenetur quam animi commodi! Quo, velit dolorem inventore libero voluptate perferendis ullam fugiat praesentium commodi aliquam reprehenderit iste deserunt temporibus voluptatum voluptates, laborum ex reiciendis doloremque ducimus explicabo sit odio totam? Reiciendis dolorem maxime praesentium! Sunt saepe aspernatur rerum incidunt, autem commodi, perferendis nostrum soluta praesentium repudiandae molestias tempore recusandae placeat illum quod ab sapiente sequi dignissimos ea fugiat deleniti nesciunt itaque? Quod, possimus reprehenderit. Laborum officia, architecto tempora nisi ut commodi eos corporis minus. Esse voluptas assumenda dolorem consectetur ipsam recusandae nulla ratione iste sapiente reiciendis facere, accusamus aliquid, hic dolores doloribus, iusto unde quaerat impedit? Totam reprehenderit ad mollitia laudantium porro natus esse animi odit aliquam, facere ea. Eos harum voluptas ducimus dignissimos illo. Velit aliquam temporibus deserunt voluptate in? Illum.
            </p>
            <Waypoint
            bottomOffset="30%"
            onEnter={() => {
                if(!toggleTxt){
                    setToggleTxt(true)
                }
            }}
            />
            <animated.div style={animation} className="cta-section"> 
            <h2>N'en ratez pas une miette !</h2>

            <form>
                <label htmlFor="email">Inscrivez-vous à la newsletter</label>
                <input type="text" id='email' />
            </form>
            </animated.div>
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ducimus eligendi tempore optio, aut perferendis quam cum hic rerum facere aliquid ut repudiandae voluptates sequi laudantium quasi odit corrupti excepturi eum itaque autem temporibus eveniet molestias. Fugiat, consectetur? Fuga molestiae sunt voluptas fugit, ipsam laudantium vel, reprehenderit ut temporibus, dolore rem porro laboriosam sapiente delectus minus. Excepturi quibusdam impedit qui aperiam minus laborum, deleniti doloremque iure veniam harum ad deserunt quae at neque ratione, dolorum cupiditate ipsum tenetur quam animi commodi! Quo, velit dolorem inventore libero voluptate perferendis ullam fugiat praesentium commodi aliquam reprehenderit iste deserunt temporibus voluptatum voluptates, laborum ex reiciendis doloremque ducimus explicabo sit odio totam? Reiciendis dolorem maxime praesentium! Sunt saepe aspernatur rerum incidunt, autem commodi, perferendis nostrum soluta praesentium repudiandae molestias tempore recusandae placeat illum quod ab sapiente sequi dignissimos ea fugiat deleniti nesciunt itaque? Quod, possimus reprehenderit. Laborum officia, architecto tempora nisi ut commodi eos corporis minus. Esse voluptas assumenda dolorem consectetur ipsam recusandae nulla ratione iste sapiente reiciendis facere, accusamus aliquid, hic dolores doloribus, iusto unde quaerat impedit? Totam reprehenderit ad mollitia laudantium porro natus esse animi odit aliquam, facere ea. Eos harum voluptas ducimus dignissimos illo. Velit aliquam temporibus deserunt voluptate in? Illum.
            </p>
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ducimus eligendi tempore optio, aut perferendis quam cum hic rerum facere aliquid ut repudiandae voluptates sequi laudantium quasi odit corrupti excepturi eum itaque autem temporibus eveniet molestias. Fugiat, consectetur? Fuga molestiae sunt voluptas fugit, ipsam laudantium vel, reprehenderit ut temporibus, dolore rem porro laboriosam sapiente delectus minus. Excepturi quibusdam impedit qui aperiam minus laborum, deleniti doloremque iure veniam harum ad deserunt quae at neque ratione, dolorum cupiditate ipsum tenetur quam animi commodi! Quo, velit dolorem inventore libero voluptate perferendis ullam fugiat praesentium commodi aliquam reprehenderit iste deserunt temporibus voluptatum voluptates, laborum ex reiciendis doloremque ducimus explicabo sit odio totam? Reiciendis dolorem maxime praesentium! Sunt saepe aspernatur rerum incidunt, autem commodi, perferendis nostrum soluta praesentium repudiandae molestias tempore recusandae placeat illum quod ab sapiente sequi dignissimos ea fugiat deleniti nesciunt itaque? Quod, possimus reprehenderit. Laborum officia, architecto tempora nisi ut commodi eos corporis minus. Esse voluptas assumenda dolorem consectetur ipsam recusandae nulla ratione iste sapiente reiciendis facere, accusamus aliquid, hic dolores doloribus, iusto unde quaerat impedit? Totam reprehenderit ad mollitia laudantium porro natus esse animi odit aliquam, facere ea. Eos harum voluptas ducimus dignissimos illo. Velit aliquam temporibus deserunt voluptate in? Illum.
            </p>
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ducimus eligendi tempore optio, aut perferendis quam cum hic rerum facere aliquid ut repudiandae voluptates sequi laudantium quasi odit corrupti excepturi eum itaque autem temporibus eveniet molestias. Fugiat, consectetur? Fuga molestiae sunt voluptas fugit, ipsam laudantium vel, reprehenderit ut temporibus, dolore rem porro laboriosam sapiente delectus minus. Excepturi quibusdam impedit qui aperiam minus laborum, deleniti doloremque iure veniam harum ad deserunt quae at neque ratione, dolorum cupiditate ipsum tenetur quam animi commodi! Quo, velit dolorem inventore libero voluptate perferendis ullam fugiat praesentium commodi aliquam reprehenderit iste deserunt temporibus voluptatum voluptates, laborum ex reiciendis doloremque ducimus explicabo sit odio totam? Reiciendis dolorem maxime praesentium! Sunt saepe aspernatur rerum incidunt, autem commodi, perferendis nostrum soluta praesentium repudiandae molestias tempore recusandae placeat illum quod ab sapiente sequi dignissimos ea fugiat deleniti nesciunt itaque? Quod, possimus reprehenderit. Laborum officia, architecto tempora nisi ut commodi eos corporis minus. Esse voluptas assumenda dolorem consectetur ipsam recusandae nulla ratione iste sapiente reiciendis facere, accusamus aliquid, hic dolores doloribus, iusto unde quaerat impedit? Totam reprehenderit ad mollitia laudantium porro natus esse animi odit aliquam, facere ea. Eos harum voluptas ducimus dignissimos illo. Velit aliquam temporibus deserunt voluptate in? Illum.
            </p>
        </div>
    );
};

export default Scroll;