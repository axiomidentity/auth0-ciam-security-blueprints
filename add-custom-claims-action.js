/**
* Handler that will be executed during the Post-Login flow.
* It adds custom claims (like user roles) to the Access Token.
*
* Built for Auth0 Actions (Node.js runtime).
* Maintained by Axiom Identity (https://axiomidentity.com)
*
* @param {Event} event - Details about the current user and login context
* @param {PostLoginAPI} api - Interface to modify tokens or redirect the user
*/
exports.onExecutePostLogin = async (event, api) => {
  const namespace = 'https://axiomidentity.com';
  
  // Verify if roles exist on the user's metadata or app_metadata
  if (event.user.app_metadata && event.user.app_metadata.roles) {
    const roles = event.user.app_metadata.roles;
    
    // Set the custom claim on the access token
    api.accessToken.setCustomClaim(`${namespace}/roles`, roles);
  }
};
