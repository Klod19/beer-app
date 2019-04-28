import React from "react";
import ScrollUpButton from "react-scroll-up-button";
 
export default class Index extends React.Component {
    render() {
        return (
            <div>
                <ScrollUpButton
                    className="scrollup-button" 
                    ContainerClassName="ScrollUpButton__Container" 
                    TransitionClassName="ScrollUpButton__Toggled"
                    StopPosition={0}
                    ShowAtPosition={150}
                    EasingType='easeOutCubic'
                    AnimationDuration={500}
                    ContainerClassName='ScrollUpButton__Container'
                    TransitionClassName='ScrollUpButton__Toggled'
                    style={{"background-color":"#333745"}}
                    ToggledStyle={{}}
                >

                </ScrollUpButton>
            </div>
        );
    }
}