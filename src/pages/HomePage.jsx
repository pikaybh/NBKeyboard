import React, { Component, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer4HP from '../components/Footer4HomePage';
import Draggable from "react-draggable";

/* fake data generator {} DragDropContext, Droppable,
const getItems = count =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k}`,
        content: `item ${k}`
    }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: 250
});*/

function HomePage() {
    /*constructor(props) {
        super(props);
        this.state = {
            items: getItems(10)
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(
            this.state.items,
            result.source.index,
            result.destination.index
        );

        this.setState({
            items
        });
    }*/

    const nodeRef = useRef(null);

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const [Opacity, setOpacity] = useState(false);

    const trackPos = (data) => {
        setPosition({ x: data.x, y: data.y });
    };

    const handleStart = () => {
        setOpacity(true);
    };
    const handleEnd = () => {
        setOpacity(false);
    };

    return (
        /*<DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable droppableId="droppable">
            {(provided, snapshot) => (
                <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                >
                {this.state.items.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                        <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                        )}
                        >
                        {item.content}
                        </div>
                    )}
                    </Draggable>
                ))}
                {provided.placeholder}
                </div>
            )}
            </Droppable>
        </DragDropContext>*/
    
        <div className="HomePage">
            <Header />

            <div className="keyboard">
                <div className="keylayout">
                    <Draggable
                        nodeRef={nodeRef}
                        onDrag={(e, data) => trackPos(data)}
                        onStart={handleStart}
                        onStop={handleEnd}
                    >
                        <Link to="/intro"
                            ref={nodeRef}
                            className="keycab draggable"
                            style={{ opacity: Opacity ? "0.6" : "1" }}
                        >
                            <div className="keyboarder">
                                <div className="keylabels">
                                    NBK<br />소개
                                </div>
                            </div>
                        </Link>
                    </Draggable>
                    <Draggable
                        nodeRef={nodeRef}
                        onDrag={(e, data) => trackPos(data)}
                        onStart={handleStart}
                        onStop={handleEnd}
                    >
                        <Link to='/products'
                            ref={nodeRef}
                            className="keycab draggable"
                            style={{ opacity: Opacity ? "0.6" : "1" }}
                        >
                            <div className="keyboarder">
                                <div className="keylabels">
                                    Products
                                </div>
                            </div>
                        </Link>
                    </Draggable>
                    <Draggable
                        nodeRef={nodeRef}
                        onDrag={(e, data) => trackPos(data)}
                        onStart={handleStart}
                        onStop={handleEnd}
                    >
                        <Link to='/contact'
                            ref={nodeRef}
                            className="keycab draggable"
                            style={{ opacity: Opacity ? "0.6" : "1" }}
                        >
                            <div className="keyboarder">
                                <div className="keylabels">Contact
                                </div>
                            </div>
                        </Link>
                    </Draggable>
                    <Link to='/career' className="keycab">
                        <div className="keyboarder">
                            <div className="keylabels">
                                NBK<br />인원
                            </div>
                        </div>
                    </Link>
                    <div className="keycab">
                    </div>
                    <Link to='/notice' className="keycab">
                        <div className="keyboarder">
                            <div className="keylabels">소식
                            </div>
                        </div>
                    </Link>
                    <Link to='/history' className="keycab">
                        <div className="keyboarder">
                            <div className="keylabels">
                                회사<br />연혁
                            </div>
                        </div>
                    </Link>
                    <div className="keycab">
                    </div>
                    <Link to='/review' className="keycab">
                        <div className="keyboarder">
                            <div className="keylabels">후기
                            </div>
                        </div>
                    </Link>
                    <div className="keycab">
                    </div>
                    <div className="keycab">
                    </div>
                    <Link to='/questions' className="keycab">
                        <div className="keyboarder">
                            <div className="keylabels">Q&A
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer4HP />
        </div>
    );
}

export default HomePage;

// Put the thing into the DOM!
//ReactDOM.render(<HomePage />, document.getElementById("root"));