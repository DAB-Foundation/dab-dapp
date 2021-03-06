Meteor.startup(function() {

    // SET default language
    if(Cookie.get('TAPi18next')) {
        TAPi18n.setLanguage(Cookie.get('TAPi18next'));
    } else {
        var userLang = navigator.language || navigator.userLanguage,
        availLang = TAPi18n.getLanguages();

        // set default language
        if (_.isObject(availLang) && availLang[userLang]) {
            TAPi18n.setLanguage(userLang);
        } else if (_.isObject(availLang) && availLang[userLang.substr(0,2)]) {
            TAPi18n.setLanguage(userLang.substr(0,2));
        } else {
            TAPi18n.setLanguage('en');
        }
    }
    // change moment and numeral language, when language changes
    Tracker.autorun(function(){
        if(_.isString(TAPi18n.getLanguage())) {
            var lang = TAPi18n.getLanguage().substr(0,2);
            moment.locale(lang);
            try {
                numeral.language(lang);
            } catch (err) {
                console.warn('numeral.js couldn\'t set number formating: ', err.message);
            }
            EthTools.setLocale(lang);
        }

        // If on the mainnet, this will add the deposit token by default, only once.
        if (!localStorage['dapp_initDAB']){
            localStorage.setItem('dapp_initDAB', true);
            // wait 5s, to allow the tokens to be loaded from the localstorage first
            if(Session.get('network') !== 'main'){
                Meteor.setTimeout(function(){

                    var dabAddress = '0x2d4b36fe2432f7895817c341dbdde69f2e2dfb20';
                    var dabName = 'DAB';
                    var dabJsonInterface = [{"constant":false,"inputs":[{"name":"_walletFactory","type":"address"}],"name":"setDABWalletFactory","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"acceptCreditAgentOwnership","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"acceptDepositAgentOwnership","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"activate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"subCreditToken","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_cdtAmount","type":"uint256"}],"name":"cash","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isActive","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_dptAmount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_cdtAmount","type":"uint256"}],"name":"loan","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"repay","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferCreditAgentOwnership","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"acceptDABWalletFactoryOwnership","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"formula","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferDepositAgentOwnership","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"freeze","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"depositAgentActivationTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"creditToken","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"toCreditToken","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"loanPlanFormulas","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sctAmount","type":"uint256"}],"name":"toDiscreditToken","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferDABWalletFactoryOwnership","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_loanPlanFormula","type":"address"}],"name":"addLoanPlanFormula","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"creditAgent","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"walletFactory","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"depositToken","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"loanPlanFormulaStatus","outputs":[{"name":"isValid","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"activationEndTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"creditAgentActivationTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"discreditToken","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"ACTIVATION_DURATION","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_loanPlanFormula","type":"address"}],"name":"disableLoanPlanFormula","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"depositAgent","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"activationStartTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_formula","type":"address"}],"name":"setDABFormula","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"CDT_AGENT_ACTIVATION_LAG","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"_depositAgent","type":"address"},{"name":"_creditAgent","type":"address"},{"name":"_startTime","type":"uint256"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_time","type":"uint256"}],"name":"LogActivation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_time","type":"uint256"}],"name":"LogFreezing","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_old","type":"address"},{"indexed":false,"name":"_new","type":"address"}],"name":"LogUpdateDABFormula","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_prevOwner","type":"address"},{"indexed":false,"name":"_newOwner","type":"address"}],"name":"OwnerUpdate","type":"event"}];
                    CustomContracts.upsert({address: dabAddress}, {$set: {
                        address: dabAddress,
                        name: dabName,
                        jsonInterface: dabJsonInterface
                    }});

                    var walletFactoryAddress = '0x442f84efa3a4c28efd49c0d3622651d4f859447a';
                    var walletFactoryName = 'DABWalletFactory';
                    var walletFactoryJsonInterface = [{"constant":false,"inputs":[],"name":"activate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isActive","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"loanPlanFormulas","outputs":[{"name":"isValid","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"freeze","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_loanPlanFormula","type":"address"}],"name":"setWalletLoanPlanFormula","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"wallets","outputs":[{"name":"loanPlanFormula","type":"address"},{"name":"isValid","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_loanPlanFormula","type":"address"}],"name":"addLoanPlanFormula","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"newDABWallet","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"dab","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_loanPlanFormula","type":"address"}],"name":"disableLoanPlanFormula","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_wallet","type":"address"}],"name":"isWalletFormulaValid","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"loanPlanFormulasList","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"_dab","type":"address"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_formula","type":"address"}],"name":"LogAddLoanPlanFormula","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_formula","type":"address"}],"name":"LogDisableLoanPlanFormula","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"},{"indexed":false,"name":"_wallet","type":"address"}],"name":"LogNewWallet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_prevOwner","type":"address"},{"indexed":false,"name":"_newOwner","type":"address"}],"name":"OwnerUpdate","type":"event"}];
                    CustomContracts.upsert({address: walletFactoryAddress}, {$set: {
                        address: walletFactoryAddress,
                        name: walletFactoryName,
                        jsonInterface: walletFactoryJsonInterface
                    }});

                    var depositTokenAddress = '0xff99ba7b71637e5d5873a0b84d28bbb8803190bc';
                    var depositTokenName = 'DPT';
                    var depositTokenJsonInterface = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_disable","type":"bool"}],"name":"disableTransfers","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"standard","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdrawTokens","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_amount","type":"uint256"}],"name":"destroy","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"transfersEnabled","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint8"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_token","type":"address"}],"name":"NewSmartToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Issuance","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Destruction","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_prevOwner","type":"address"},{"indexed":false,"name":"_newOwner","type":"address"}],"name":"OwnerUpdate","type":"event"}];
                    CustomContracts.upsert({address: depositTokenAddress}, {$set: {
                        address: depositTokenAddress,
                        name: depositTokenName,
                        jsonInterface: depositTokenJsonInterface
                    }});

                    var depositToken = '0xff99ba7b71637e5d5873a0b84d28bbb8803190bc';
                    depositTokenId = Helpers.makeId('token', depositToken);
                    Tokens.upsert(depositTokenId, {$set: {
                        address: depositToken,
                        name: 'Deposit Token',
                        symbol: 'DPT',
                        balances: {},
                        decimals: 18
                    }});

                    var creditToken = '0x1b24128b678137f034f1ec8e323a67d645222686';
                    creditTokenId = Helpers.makeId('token', creditToken);
                    Tokens.upsert(creditTokenId, {$set: {
                        address: creditToken,
                        name: 'Credit Token',
                        symbol: 'CDT',
                        balances: {},
                        decimals: 18
                    }});

                    var discreditToken = '0x3d47757f88e4e9d1f6fabbb53582f046f7edcf57';
                    discreditTokenId = Helpers.makeId('token', discreditToken);
                    Tokens.upsert(discreditTokenId, {$set: {
                        address: discreditToken,
                        name: 'Discredit Token',
                        symbol: 'DCT',
                        balances: {},
                        decimals: 18
                    }});
                }, 5000);
            }

        }


    });


});
