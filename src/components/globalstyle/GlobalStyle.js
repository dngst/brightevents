import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body {
	    font-family: 'Quicksand', sans-serif;
	}

	a {
	    text-decoration: none;
	    color: #f78f1e;
	}

	.index h1 {
	    text-transform: capitalize;
	    font-size: 3rem;
	    margin-top: 15%;
	}

	.center {
	    text-align: center;
	}

	.capitalize {
	    text-transform: capitalize;
	}
`
export default GlobalStyle;
