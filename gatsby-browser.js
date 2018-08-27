/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

 // You can delete this file if you're not using it
 
exports.onRouteUpdate = ({ location }) => {
	dataLayer.push({ event: 'pageview' });
}

// exports.onClientEntry = () => {
// 	dataLayer.push({ event: 'pageview' });
// }