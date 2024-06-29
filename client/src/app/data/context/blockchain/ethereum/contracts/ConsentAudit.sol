// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ConsentAudit {
    // Structs for authorization server, consent effectiveness, and client
    struct AuthorizationServer {
        bytes32 url;
        bytes32 company;
        bytes32 tag;
    }

    // Consent struct to store information about each consent
    struct Consent {
        bytes32 client_id;
        uint256 from;
        uint256 to;
        bytes32 auth_server_url;
        bytes32 auth_server_tag;
        bytes32 scope; // Scope of the consent (e.g., "read:profile" or "write:post")
    }

    // Mapping of resource IDs to collections of consents
    mapping(bytes32 => Consent[]) public resources;

    // Event emitted when a new consent is granted
    event NewConsent(
        bytes32 indexed resource,
        bytes32 indexed client_id,
        uint256 from,
        uint256 to
    );

    // Event emitted when an existing consent is revoked
    event RevokedConsent(bytes32 indexed resource, bytes32 indexed client_id);

    // Function to grant a new consent
    function grantConsent(
        bytes32 resource,
        bytes32 client_id,
        bytes32 auth_server_url,
        bytes32 auth_server_tag,
        uint256 from,
        uint256 to,
        bytes32 scope
    ) public {
        Consent memory consent = Consent(
            client_id,
            from,
            to,
            auth_server_url,
            auth_server_tag,
            scope
        );
        resources[resource].push(consent);
        emit NewConsent(resource, client_id, from, to);
    }

    // Function to revoke an existing consent
    function revokeConsent(bytes32 resource, bytes32 client_id) public {
        for (uint256 i = 0; i < resources[resource].length; i++) {
            if (resources[resource][i].client_id == client_id) {
                resources[resource][i] = Consent(0, 0, 0, "", "", "");
                emit RevokedConsent(resource, resources[resource][i].client_id);
                return;
            }
        }
    }

    // Function to get all consents for a given resource
    function getConsents(
        bytes32 resource
    ) public view returns (Consent[] memory) {
        return resources[resource];
    }

    // Function to check if a consent is still valid
    function isValidConsent(
        bytes32 resource,
        bytes32 client_id
    ) public view returns (bool) {
        for (uint256 i = 0; i < resources[resource].length; i++) {
            if (resources[resource][i].client_id == client_id) {
                return true;
            }
        }
        return false;
    }

    // Function to get the scope of a given consent
    function getScope(
        bytes32 resource,
        bytes32 client_id
    ) public view returns (bytes32) {
        for (uint256 i = 0; i < resources[resource].length; i++) {
            if (resources[resource][i].client_id == client_id) {
                return resources[resource][i].scope;
            }
        }
        return "";
    }

    // Function to get the effectiveness of a given consent
    function getEffectiveness(
        bytes32 resource,
        bytes32 client_id
    ) public view returns (uint256, uint256) {
        for (uint256 i = 0; i < resources[resource].length; i++) {
            if (resources[resource][i].client_id == client_id) {
                return (resources[resource][i].from, resources[resource][i].to);
            }
        }
        return (0, 0);
    }
}
