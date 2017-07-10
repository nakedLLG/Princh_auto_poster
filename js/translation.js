$(document).ready(function() {
    //First value in form currency option is EURO
$( "#myselect" ).val('EUR');
//Translate user option for poster print output
$('#selectLanguageDropdown').localizationTool({
    // this is the language that the server is sending anyway
                'defaultLanguage' : 'en_GB', 
                'ignoreUnmatchedSelectors' : true,
                'showFlag': true,            
                'showCountry': true,         
                'showLanguage': true,
                'onLanguageSelected' : function (languageCode) {
                    /*
                     * When the user translates, the cookie is set
                     */
                    $.cookie('userLanguage', languageCode);

                    return true;
                },

                /* Translate the strings that appear in all the pages below */
                'strings' : {
                    /* Translate the strings below */
                    'id:pic-head-h1' : {
                        'da_DK' : 'PRINTVEJLEDNING',
                        'se_SE' : 'UTSKRIFTSGUIDE',
                        'no_NO' : 'PRINT GUIDE',
                        'fi_FI' : 'TULOSTUSOPAS'   
                    },
                    'id:pic-head-h3' : {
                        'da_DK' : 'Det er muligt at printe fra følgende enheder',
                        'se_SE' : 'Det är möjligt att skriva ut via följande enheter',
                        'no_NO' : 'Printing er mulig fra de følgende enhetene:',
                        'fi_FI' : 'Tulostaminen on mahdollista seuraavilla laitteilla'   
                    },
                    'id:first-table-head-col1' : {
                        'da_DK' : "PUBLIKUMS-PC<br><br>",
                        'se_SE' : "SKRIVA UT FRÅN BIBLIOTEKSDATORN",
                        'no_NO' : "PUBLIKUMS-PC<br><br>",
                        'fi_FI' : "JULKINEN PC<br><br>"   
                    },
                    'id:first-table-head-col2' : {
                        'da_DK' : 'BÆRBAR PC<br><br>',
                        'se_SE' : 'SKRIVA UT FRÅN BÄRBAR DATOR',
                        'no_NO' : 'BÆRBAR PC<br><br>',
                        'fi_FI' : 'KANNETTAVA PC<br><br>'   
                    },
                    'id:first-table-head-col3' : {
                        'da_DK' : 'MOBIL<br><br>',
                        'se_SE' : 'SKRIVA UT FRÅN MOBIL OCH SURFPLATTA',
                        'no_NO' : 'MOBIL<br><br>',
                        'fi_FI' : 'MOBIILI<br><br>'   
                    },
                    'id:first-table-row1-col1' : {
                        'da_DK' : "<strong>1</strong> Åbn det dokument du ønsker at printe på PC’en",
                        'se_SE' : "<strong>1</strong> Öppna det dokument du vill skriva ut på datorn",
                        'no_NO' : "<strong>1</strong> Åpne dokumentet du har lyst å printe på publikums-PC’en",
                        'fi_FI' : "<strong>1</strong> Avaa haluamasi tiedosto julkisella tietokoneella"   
                    },
                    'id:first-table-row1-col2' : {
                        'da_DK' : "<strong>1</strong> Åbn en browser og gå til <strong>print.princh.com</strong>",
                        'se_SE' : "<strong>1</strong> Öppna webbläsaren och gå till <strong>print.princh.com</strong>",
                        'no_NO' : "<strong>1</strong> Åpne en nettleser og gå til <strong>print.princh.com</strong>",
                        'fi_FI' : "<strong>1</strong> Avaa selain ja mene osoitteeseen <strong>print.princh.com</strong>"   
                    },
                    'id:first-table-row1-col3' : {
                        'da_DK' : "<strong>1</strong> Installer Princh-app’en til iOS eller Android",
                        'se_SE' : "<strong>1</strong> Installera Princh-appen på iOS eller Android",
                        'no_NO' : "<strong>1</strong> Installer Princh appen for IOS eller Android",
                        'fi_FI' : "<strong>1</strong> Lataa iOS tai Android Princh-sovellus"   
                    },
                    'id:first-table-row2-col1' : {
                        'da_DK' : "<strong>2</strong> Vælg ”Udskriv” og godkend ",
                        'se_SE' : "<strong>2</strong> Välj “ Skriv ut” och godkänn",
                        'no_NO' : "<strong>2</strong> Trykk på print og godkjenn",
                        'fi_FI' : "<strong>2</strong> Klikkaa tulosta ja hyväksy"   
                    },
                    'id:first-table-row2-col2' : {
                        'da_DK' : "<strong>2</strong> Vælg dokument og printer-ID",
                        'se_SE' : "<strong>2</strong> Välj dokument och skrivar-id",
                        'no_NO' : "<strong>2</strong> Velg dokumentet ditt og printerID",
                        'fi_FI' : "<strong>2</strong> Valitse tiedosto ja tulostintunnus"   
                    },
                    'id:first-table-row2-col3' : {
                        'da_DK' : "<strong>2</strong> Åbn dokument og del med Princh-app’en",
                        'se_SE' : "<strong>2</strong> Öppna dokumentet och dela det med Princh-appen",
                        'no_NO' : "<strong>2</strong> Åpne dokumentet og del det med Princh appen",
                        'fi_FI' : "<strong>2</strong> Avaa tiedosto ja jaa Princhsovellukselle"   
                    },
                    'id:first-table-row3-col1' : {
                        'da_DK' : "<strong>3</strong> Tjek dine udskriftsindstillinger i vinduet der dukker op",
                        'se_SE' : "<strong>3</strong> Kontrollera dina utskriftsinställningar i fönstret",
                        'no_NO' : "<strong>3</strong> Juster dine innstillinger i vinduet som dukker opp",
                        'fi_FI' : "<strong>3</strong> Tarkista tulostusasetukset ruudulle ilmestyvästä ikkunasta"   
                    },
                    'id:first-table-row3-col2' : {
                        'da_DK' : "<strong>3</strong> Vælg dine ønskede udskriftsindstillinger",
                        'se_SE' : "<strong>3</strong> Välj dina önskade utskriftsinställ-ningar",
                        'no_NO' : "<strong>3</strong> Juster dine innstillinger",
                        'fi_FI' : "<strong>3</strong> Valitse tulostinasetuksesi"   
                    },
                    'id:first-table-row3-col3' : {
                        'da_DK' : "<strong>3</strong> Vælg printer-ID og dine ønskede udskriftsindstillinger",
                        'se_SE' : "<strong>3</strong> Välj skrivar-id och kontrollera utskriftsinställningar",
                        'no_NO' : "<strong>3</strong> Velg printer-ID og juster dine innstillinger",
                        'fi_FI' : "<strong>3</strong> Valitse tulostintunnuksesi ja-asetuksesi"   
                    },
                    'id:first-table-row4-col1' : {
                        'da_DK' : "<strong>4</strong> Betal på PC’en med betalingskort eller Mobilepay<br>",
                        'se_SE' : "<strong>4</strong> Betala via datorn med ett kontokort",
                        'no_NO' : "<strong>4</strong> Betal på PC’en med et bankkort eller med en betalingsapp",
                        'fi_FI' : "<strong>4</strong> Maksa tietokoneella maksukortilla<br><br>"   
                    },
                    'id:first-table-row4-col2' : {
                        'da_DK' : "<strong>4</strong> Betal på PC’en med betalingskort eller Mobilepay<br>",
                        'se_SE' : "<strong>4</strong> Betala via datorn med ett kontokort",
                        'no_NO' : "<strong>4</strong> Betal fra din bærbare med et bankkort eller med en betalingsapp",
                        'fi_FI' : "<strong>4</strong> Maksa kannettavaltasi maksukortilla<br><br>"   
                    },
                    'id:first-table-row4-col3' : {
                        'da_DK' : "<strong>4</strong> Betal i app’en med betalingskort eller Mobilepay<br>",
                        'se_SE' : "<strong>4</strong> Betala via datorn med ett kontokort",
                        'no_NO' : "<strong>4</strong> Betal fra mobilen eller nettbrett med et bankkort eller med en betalingsapp",
                        'fi_FI' : "<strong>4</strong> Maksa puhelimeltasi maksukortilla<br><br>"   
                    },
                    'id:basic-table-head1' : {
                        'da_DK' : "FORMAT",
                        'se_SE' : "FORMAT",
                        'no_NO' : "FORMAT",
                        'fi_FI' : "KOKO"   
                    },
                    'id:basic-table-head2' : {
                        'da_DK' : "FARVE",
                        'se_SE' : "FÄRG",
                        'no_NO' : "FARGE",
                        'fi_FI' : "VÄRI"   
                    },
                    'id:basic-table-head3' : {
                        'da_DK' : "PRISER",
                        'se_SE' : "PRISER",
                        'no_NO' : "PRISER",
                        'fi_FI' : "HINNAT"   
                    },
                    'id:basic-table-head4' : {
                        'da_DK' : "PRINTER-ID",
                        'se_SE' : "PRINTER-ID",
                        'no_NO' : "PRINTER-ID",
                        'fi_FI' : "TUNNUS"   
                    },
                    'id:A4-col-name' : {
                        'da_DK' : "Farve",
                        'se_SE' : "Färg",
                        'no_NO' : "Farge",
                        'fi_FI' : "Väri"   
                    },
                    'id:A4-col-name-bw' : {
                        'da_DK' : "Sort/hvid",
                        'se_SE' : "Svart/vit",
                        'no_NO' : "Svart/hvitt",
                        'fi_FI' : "Mustavalko"   
                    },
                    'id:A3-col-name' : {
                        'da_DK' : "Farve",
                        'se_SE' : "Färg",
                        'no_NO' : "Farge",
                        'fi_FI' : "Väri"   
                    },
                    'id:A3-col-name-bw' : {
                        'da_DK' : "Sort/hvid",
                        'se_SE' : "Svart/vit",
                        'no_NO' : "Svart/hvitt",
                        'fi_FI' : "Mustavalko"   
                    }
                }

            });

            var userLanguage = $.cookie('userLanguage');
            if (typeof userLanguage !== 'undefined') {
                $('#selectLanguageDropdown').localizationTool('translate', userLanguage);
            }
            $('body').show();
        });