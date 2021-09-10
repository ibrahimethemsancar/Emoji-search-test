import {render, screen} from"@testing-library/react"
import React from "react";
import Header from "./Header";
import '@testing-library/jest-dom'
test(' header render test', () => {
    render(<Header/>);
    const emojiSearch = screen.getByText(/Emoji Search/i);
    expect(emojiSearch).toBeInTheDocument();
})