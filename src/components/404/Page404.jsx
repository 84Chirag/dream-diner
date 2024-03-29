import React from 'react'
import './page404.css'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div id="notfound">
		<div className="notfound">
			{/* <div class="notfound-404">
				<h1>Oops!</h1>
			</div> */}
			<h2>404 - Page not found</h2>
			<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
			<a href="/">Go To Homepage</a>
		</div>
	</div>
  )
}

export default Page404