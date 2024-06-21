async function main() {
    const ConsentAudit = await ethers.getContractFactory("ConsentAudit");
    console.log("Deploying ConsentAudit...");
    const consentAudit = await ConsentAudit.deploy();
    await consentAudit.deployed();
    console.log("ConsentAudit deployed to:", consentAudit.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });