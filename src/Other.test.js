import {render, screen} from"@testing-library/react"
import React from "react";
import '@testing-library/jest-dom'
import userEvent from"@testing-library/user-event"
import App from "./App";

describe('General Test',()=>{
    test('first render emoji list  ', () => {
        render(<App/>)
        const list = screen.getAllByText("Click to copy emoji")
        expect(list.length).toBe(20)
    })

    test(' true filter  ', () => {
        render(<App/>)
        const input =screen.getByTestId("search")
        const emoji = "Smile"
        userEvent.type(input,emoji)
        expect(screen.getByText(emoji)).toBeInTheDocument()
        
    
    })

    test('should ', () => {
        render(<App/>)
        const onEmoji= screen.getByTestId("emoji")
        userEvent.click(onEmoji)
        
        
    
    })
})






