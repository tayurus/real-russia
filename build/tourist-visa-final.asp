<% dim i, key %>
<% sub TitleSection %>Russian Tourist Visa Support Application<% end sub %>

<% sub StyleSheetsSection %>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"/>
<link rel="stylesheet" href="styles.css"/>
<script src="script.js" defer="defer"></script>
<% end sub %>

<% sub ScriptsSection %>
<% end sub %>
<% sub MainContentSection %>
<main class="container_form-wrapper">
   <div class="container">
       <div class="d-flex flex-wrap align-items-center justify-content-between">
           <div>
               <div class="title">Russian Tourist Visa Support Application</div>

               <div class="steps">
                   <div class="steps__item steps__item_correct steps__item_active" data-steps="1">
                       1
                       <div class="steps__item-text">SERVICE DETAILS</div>
                   </div>
                   <div class="steps__line steps__line_filled"></div>
                   <div class="steps__item steps__item_incorrect" data-steps="2">
                       2
                       <div class="steps__item-text">PERSONAL DETAILS</div>
                   </div>
                   <div class="steps__line"></div>
                   <div class="steps__item steps__item_visited" data-steps="3">
                       3
                       <div class="steps__item-text">YOUR VISIT</div>
                   </div>
                   <div class="steps__line"></div>
                   <div class="steps__item" data-steps="4">
                       4
                       <div class="steps__item-text">PAYMENT</div>
                   </div>
               </div>

           </div>
           <div class="total pl-0 pl-sm-4">
               <div class="d-flex flex-column flex-sm-row">
                   <div class="mr-4 mb-2 mb-sm-0">
                       <div class="total__label">Currency</div>
                       <select class="total__select">
                           <option value="gbp">£ - GBP</option>
                           <option value="gbp">$ - USD</option>
                           <option value="gbp">€ - EUR</option>
                       </select>
                   </div>
                   <div>
                       <div class="total__label">Language</div>
                       <input type="text" readonly="readonly" class="total__select total__country"/>
                   </div>
               </div>
               <div class="total__result">
                   <div class="total__label total__label_big mr-1">Total price</div>
                   <div class="total__sum">
                       <span class="total__currency">£</span>15.30
                   </div>
               </div>
               <div class="total__label total__label_small">Prices are shown in different currencies for your convenience, however payment will be made in British Pounds at the prevailing bank rate.</div>
           </div>

       </div>
   </div>
   <div class="container bg-gray pb-4">
       <div class="d-flex align-items-center justify-content-center justify-content-sm-between">
           <div class="jc-sb pt-27 pl-10 d-block d-sm-flex">
               <div class="flex-grow-1 button-wrap d-block d-sm-flex flex-grow-1">
                   <div>
                       <button class="button mr-3">retrieve saved application</button>
                       <div class="button__text">CONTINUE a saved existing application.</div>
                   </div>
                   <div>
                       <button class="button">save progress</button>
                       <div class="button__text">SAVE your current progress.</div>
                   </div>
               </div>
               <div class="ml-3 ml-xl-0">
                   <button class="button border-red color-red bg-white">I AM A RETURNING CLIENT</button>
                   <div class="button__text">Recover your personal details quickly to pre-fill your application.</div>
               </div>
           </div>
       </div>
       <div data-step="1" class="step">
           <h2 class="step__title">service details</h2>
           <div class="step__description">
               <img src="img/portfolio.png" alt="" class="mr-4"/>
               <div class="step__text">
                   <b>Let’s start with the basics -</b>
                   <br/>
                   <span>We need to find out first a little about your upcoming visit.</span>
               </div>
           </div>
           <div class="input">
               <div class="input__wrapper input__wrapper_correct">
                   <label class="input__label">Group Size</label>
                   <select class="input__select input-group-size" name="MaxGroupSize">
                        <%
                            for i = 0 to ViewBag.MaxGroupSize %>
                           <option value="<%= i %>">
                                <%= i %>
                           </option>
                        <% next %>
                   </select>
               </div>
               <div class="input__highlight"></div>
               <div class="hint">
                   <div class="hint__header">
                       <div tab="1" class="hint__tab">
                           <div class="hint__header-text">Assistance</div>
                           <div class="hint__header-icon">?</div>
                       </div>
                       <div tab="2" class="hint__tab hint__tab_active">
                           <div class="hint__header-text">Further Help</div>
                           <div class="hint__header-icon">
                               <img src="img/phone-receiver.png"/>
                           </div>
                       </div>
                   </div>
                   <div data-tab="1" class="hint__body active">
                       <div class="hint__body-text">If you need further help, don’t hestitate to get in touch now with any of the following options:</div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/phone-receiver.png"/>
                           </div>
                           <div class="hint__action-text"> +44 (0)207 100 7370</div>
                       </div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/headset.png"/>
                           </div>
                           <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                       </div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/support.png"/>
                           </div>
                           <div class="hint__action-text hint__action-text_grey"> Livechat: Online</div>
                       </div>
                   </div>
                   <div data-tab="2" class="hint__body">
                       <div class="hint__body-text">If you have any questions about your visa support application either before, during or after processing please look at our frequently asked questions, or feel free to contact us directly and we will be happy to help.</div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/phone-receiver.png"/>
                           </div>
                           <div class="hint__action-text"> +44 (0)207 100 7370</div>
                       </div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/headset.png"/>
                           </div>
                           <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                       </div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/support.png"/>
                           </div>
                           <div class="hint__action-text hint__action-text_grey"> Livechat: Online                                </div>
                       </div>
                   </div>
               </div>
           </div>
           <div class="input mt-5">
               <div class="input__wrapper input__wrapper_correct">
                   <label class="input__label">Number of entries</label>
                   <select class="input__select input-entries" name="EntryTypes">
                       <%
                       dim entryType
                       for each entryType in ViewBag.EntryTypes %>
                            <option value="<%= entryType %>">
                                <%= entryType %>
                            </option>
                        <% next %>
                   </select>
               </div>
               <div class="input__highlight"></div>
               <div class="hint">
                   <div class="hint__header">
                       <div tab="1" class="hint__tab">
                           <div class="hint__header-text">Assistance</div>
                           <div class="hint__header-icon">?</div>
                       </div>
                       <div tab="2" class="hint__tab hint__tab_active">
                           <div class="hint__header-text">Further Help</div>
                           <div class="hint__header-icon">
                               <img src="img/phone-receiver.png"/>
                           </div>
                       </div>
                   </div>
                   <div data-tab="1" class="hint__body active">
                       <div class="hint__body-text">If you need further help, don’t hestitate to get in touch now with any of the following options:</div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/phone-receiver.png"/>
                           </div>
                           <div class="hint__action-text"> +44 (0)207 100 7370</div>
                       </div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/headset.png"/>
                           </div>
                           <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                       </div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/support.png"/>
                           </div>
                           <div class="hint__action-text hint__action-text_grey"> Livechat: Online</div>
                       </div>
                   </div>
                   <div data-tab="2" class="hint__body">
                       <div class="hint__body-text">If you have any questions about your visa support application either before, during or after processing please look at our frequently asked questions, or feel free to contact us directly and we will be happy to help.</div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/phone-receiver.png"/>
                           </div>
                           <div class="hint__action-text"> +44 (0)207 100 7370</div>
                       </div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/headset.png"/>
                           </div>
                           <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                       </div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/support.png"/>
                           </div>
                           <div class="hint__action-text hint__action-text_grey"> Livechat: Online                                                                </div>
                       </div>
                   </div>
               </div>
           </div>
           <div class="input mt-5">
               <div class="input__wrapper input__wrapper_correct">
                   <label class="input__label">Purpose of visit</label>
                   <select class="input__select input-purpose" name="PurposesOfVisit">
                       <% for each i in ViewBag.PurposesOfVisit %>
                            <option value="<%= i %>">
                                <%= i %>
                            </option>
                        <% next %>
                   </select>
               </div>
               <div class="auto-tourism-wrapper">
                   <div class="radio-buttons">
                       <div class="radio-buttons__wrapper">
                           <input type="radio" name="autoTourism" id="Car" class="radio-buttons__radio"/>
                           <label for="Car" class="radio-buttons__view">Car</label>
                       </div>
                       <div class="radio-buttons__wrapper">
                           <input type="radio" name="autoTourism" id="Motorcycle" class="radio-buttons__radio"/>
                           <label for="Motorcycle" class="radio-buttons__view">Motorcycle</label>
                       </div>
                   </div>
                   <div class="input">
                       <div class="input__wrapper">
                           <label class="input__label">Vehicle make</label>
                           <input type="text" name="" required="required" pattern="/^[a-z]{3,}$/gi" class="input__field"/>
                       </div>
                       <div class="input__error-label">This field cannot be empty</div>
                   </div>
                   <div class="input">
                       <div class="input__wrapper">
                           <label class="input__label">Vehicle color</label>
                           <select class="input__select" name="">
                                <option value="">Black
                                </option>
                                <option value="">Dark blue
                                </option>
                                <option value="">Golden
                                </option>
                           </select>
                       </div>
                       <div class="input__error-label">This field cannot be empty</div>
                   </div>
                   <div class="input">
                       <div class="input__wrapper">
                           <label class="input__label">Licence Plate number</label>
                           <input type="text" name="" required="required" pattern="/^[a-z]{3,}$/gi" class="input__field"/>
                       </div>
                       <div class="input__error-label">This field cannot be empty</div>
                   </div>
               </div>
               <div class="input__highlight"></div>
               <div class="hint">
                   <div class="hint__header">
                       <div tab="1" class="hint__tab">
                           <div class="hint__header-text">Assistance</div>
                           <div class="hint__header-icon">?</div>
                       </div>
                       <div tab="2" class="hint__tab hint__tab_active">
                           <div class="hint__header-text">Further Help</div>
                           <div class="hint__header-icon">
                               <img src="img/phone-receiver.png"/>
                           </div>
                       </div>
                   </div>
                   <div data-tab="1" class="hint__body active">
                       <div class="hint__body-text">If you need further help, don’t hestitate to get in touch now with any of the following options:</div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/phone-receiver.png"/>
                           </div>
                           <div class="hint__action-text"> +44 (0)207 100 7370</div>
                       </div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/headset.png"/>
                           </div>
                           <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                       </div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/support.png"/>
                           </div>
                           <div class="hint__action-text hint__action-text_grey"> Livechat: Online</div>
                       </div>
                   </div>
                   <div data-tab="2" class="hint__body">
                       <div class="hint__body-text">If you have any questions about your visa support application either before, during or after processing please look at our frequently asked questions, or feel free to contact us directly and we will be happy to help.</div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/phone-receiver.png"/>
                           </div>
                           <div class="hint__action-text"> +44 (0)207 100 7370</div>
                       </div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/headset.png"/>
                           </div>
                           <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                       </div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/support.png"/>
                           </div>
                           <div class="hint__action-text hint__action-text_grey"> Livechat: Online                                                                </div>
                       </div>
                   </div>
               </div>
           </div>
           <div class="input">
               <div class="input__wrapper input__wrapper_correct">
                   <label class="input__label">Registration</label>
                   <select class="input__select input-registration">
                       <%
                       for each key in ViewBag.Registrations %>
                            <option value="<%= key %>">
                                <%= ViewBag.Registrations(key) %>
                            </option>
                        <% next %>
                   </select>

               </div>
               <div class="input__highlight"></div>
               <div class="hint">
                   <div class="hint__header">
                       <div tab="1" class="hint__tab">
                           <div class="hint__header-text">Assistance</div>
                           <div class="hint__header-icon">?</div>
                       </div>
                       <div tab="2" class="hint__tab hint__tab_active">
                           <div class="hint__header-text">Further Help</div>
                           <div class="hint__header-icon">
                               <img src="img/phone-receiver.png"/>
                           </div>
                       </div>
                   </div>
                   <div data-tab="1" class="hint__body active">
                       <div class="hint__body-text">If you need further help, don’t hestitate to get in touch now with any of the following options:</div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/phone-receiver.png"/>
                           </div>
                           <div class="hint__action-text"> +44 (0)207 100 7370</div>
                       </div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/headset.png"/>
                           </div>
                           <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                       </div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/support.png"/>
                           </div>
                           <div class="hint__action-text hint__action-text_grey"> Livechat: Online</div>
                       </div>
                   </div>
                   <div data-tab="2" class="hint__body">
                       <div class="hint__body-text">If you have any questions about your visa support application either before, during or after processing please look at our frequently asked questions, or feel free to contact us directly and we will be happy to help.</div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/phone-receiver.png"/>
                           </div>
                           <div class="hint__action-text"> +44 (0)207 100 7370</div>
                       </div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/headset.png"/>
                           </div>
                           <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                       </div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/support.png"/>
                           </div>
                           <div class="hint__action-text hint__action-text_grey"> Livechat: Online                                                                </div>
                       </div>
                   </div>
               </div>
           </div>
           <div class="input mt-5">
               <div class="input__wrapper input__wrapper_correct">
                   <label class="input__label">Country applying in</label>
                   <br/>
                   <select class="input input__select input-country" >
                       <option selected disabled hidden>Please select</option>
                       <%
                       dim country
                       for each country in ViewBag.Countries %>
                            <option value="<%= country.name %>">
                                <%= country.name %>
                            </option>
                        <% next %>
                   </select>
               </div>
               <div class="input__highlight"></div>
               <div class="hint">
                   <div class="hint__header">
                       <div tab="1" class="hint__tab">
                           <div class="hint__header-text">Assistance</div>
                           <div class="hint__header-icon">?</div>
                       </div>
                       <div tab="2" class="hint__tab hint__tab_active">
                           <div class="hint__header-text">Further Help</div>
                           <div class="hint__header-icon">
                               <img src="img/phone-receiver.png"/>
                           </div>
                       </div>
                   </div>
                   <div data-tab="1" class="hint__body active">
                       <div class="hint__body-text">If you need further help, don’t hestitate to get in touch now with any of the following options:</div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/phone-receiver.png"/>
                           </div>
                           <div class="hint__action-text"> +44 (0)207 100 7370</div>
                       </div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/headset.png"/>
                           </div>
                           <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                       </div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/support.png"/>
                           </div>
                           <div class="hint__action-text hint__action-text_grey"> Livechat: Online</div>
                       </div>
                   </div>
                   <div data-tab="2" class="hint__body">
                       <div class="hint__body-text">If you have any questions about your visa support application either before, during or after processing please look at our frequently asked questions, or feel free to contact us directly and we will be happy to help.</div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/phone-receiver.png"/>
                           </div>
                           <div class="hint__action-text"> +44 (0)207 100 7370</div>
                       </div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/headset.png"/>
                           </div>
                           <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                       </div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/support.png"/>
                           </div>
                           <div class="hint__action-text hint__action-text_grey"> Livechat: Online                                                                </div>
                       </div>
                   </div>
               </div>
           </div>
           <div class="step__note">
               <b>CONSULAR NOTES</b>
               <div class="step__note-text">
                   The Russian consulate in United Kingdom have currently no special conditions that we are aware of and accept an email copy of the visa support documents as well as group visa supports.
                   However, this is subject to change so please confirm the current requirements directly with the consulate before submitting your application.
                   If necessary we can arrange to courier the original visa support document to you from Moscow, please feel free to contact our visa team at visas@realrussia.co.uk who will be happy to help.
               </div>
           </div>
           <div class="input mt-5">
               <div class="input__wrapper input__wrapper_correct">
                   <label class="input__label">Delivery option</label>
                   <br/>
                   <select class="input__select">
                       <option selected disabled hidden>Please select</option>
                       <%
                       for each key in ViewBag.Deliveries %>
                            <option value="<%= key %>">
                                <%= ViewBag.Deliveries(key) %>
                            </option>
                        <% next %>
                   </select>
                   <!-- <select type="text" readonly="readonly" class="input__select">
                       <option value="">By email - original not required</option>
                       <option value="">Another option</option>
                   </select> -->
               </div>
               <div class="input__highlight"></div>
               <div class="hint">
                   <div class="hint__header">
                       <div tab="1" class="hint__tab">
                           <div class="hint__header-text">Assistance</div>
                           <div class="hint__header-icon">?</div>
                       </div>
                       <div tab="2" class="hint__tab hint__tab_active">
                           <div class="hint__header-text">Further Help</div>
                           <div class="hint__header-icon">
                               <img src="img/phone-receiver.png"/>
                           </div>
                       </div>
                   </div>
                   <div data-tab="1" class="hint__body active">
                       <div class="hint__body-text">If you need further help, don’t hestitate to get in touch now with any of the following options:</div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/phone-receiver.png"/>
                           </div>
                           <div class="hint__action-text"> +44 (0)207 100 7370</div>
                       </div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/headset.png"/>
                           </div>
                           <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                       </div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/support.png"/>
                           </div>
                           <div class="hint__action-text hint__action-text_grey"> Livechat: Online</div>
                       </div>
                   </div>
                   <div data-tab="2" class="hint__body">
                       <div class="hint__body-text">If you have any questions about your visa support application either before, during or after processing please look at our frequently asked questions, or feel free to contact us directly and we will be happy to help.</div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/phone-receiver.png"/>
                           </div>
                           <div class="hint__action-text"> +44 (0)207 100 7370</div>
                       </div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/headset.png"/>
                           </div>
                           <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                       </div>
                       <div class="hint__action">
                           <div class="hint__action-icon">
                               <img src="img/support.png"/>
                           </div>
                           <div class="hint__action-text hint__action-text_grey"> Livechat: Online  </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <div data-step="2" class="step">
           <h2 class="step__title">Personal details</h2>
           <div class="step__description">
               <img src="img/user.png" alt="" class="mr-4"/>
               <div class="step__text">
                   <b>Let us know a bit about yourself -</b>
                   <br/>
                   <span>Just the key details we need to collect from you and your group to proceed with our application. You can add up to a further 5 people below by just clicking on the ‘Add another person’ button.</span>
               </div>
           </div>
           <div class="visitor-wrapper">
               <div class="step__subtitle">
                   <div class="step__subtitle-text">Visitor 1</div>
                   <div class="step__subtitle-icon"></div>
               </div>
               <div class="step__subtitle-content">
                   <div class="input mt-4">
                       <div class="input__wrapper">
                           <label class="input__label">First name</label>
                           <input type="text" name="" required="required" pattern="/^[a-z]{3,}$/gi" class="input__field"/>
                       </div>
                       <div class="input__error-label">This field cannot be empty</div>
                       <div class="hint">
                           <div class="hint__header">
                               <div tab="1" class="hint__tab">
                                   <div class="hint__header-text">Assistance</div>
                                   <div class="hint__header-icon">?</div>
                               </div>
                               <div tab="2" class="hint__tab hint__tab_active">
                                   <div class="hint__header-text">Further Help</div>
                                   <div class="hint__header-icon">
                                       <img src="img/phone-receiver.png"/>
                                   </div>
                               </div>
                           </div>
                           <div data-tab="1" class="hint__body active">
                               <div class="hint__body-text">If you need further help, don’t hestitate to get in touch now with any of the following options:</div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/phone-receiver.png"/>
                                   </div>
                                   <div class="hint__action-text"> +44 (0)207 100 7370</div>
                               </div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/headset.png"/>
                                   </div>
                                   <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                               </div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/support.png"/>
                                   </div>
                                   <div class="hint__action-text hint__action-text_grey"> Livechat: Online</div>
                               </div>
                           </div>
                           <div data-tab="2" class="hint__body">
                               <div class="hint__body-text">If you have any questions about your visa support application either before, during or after processing please look at our frequently asked questions, or feel free to contact us directly and we will be happy to help.</div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/phone-receiver.png"/>
                                   </div>
                                   <div class="hint__action-text"> +44 (0)207 100 7370</div>
                               </div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/headset.png"/>
                                   </div>
                                   <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                               </div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/support.png"/>
                                   </div>
                                   <div class="hint__action-text hint__action-text_grey"> Livechat: Online                                                                </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div class="input">
                       <div class="input__wrapper">
                           <label class="input__label">Middle name</label>
                           <input type="text" name="" required="required" pattern="/^[a-z]{3,}$/gi" class="input__field"/>
                       </div>
                       <div class="input__error-label">This field cannot be empty</div>
                       <div class="hint">
                           <div class="hint__header">
                               <div tab="1" class="hint__tab">
                                   <div class="hint__header-text">Assistance</div>
                                   <div class="hint__header-icon">?</div>
                               </div>
                               <div tab="2" class="hint__tab hint__tab_active">
                                   <div class="hint__header-text">Further Help</div>
                                   <div class="hint__header-icon">
                                       <img src="img/phone-receiver.png"/>
                                   </div>
                               </div>
                           </div>
                           <div data-tab="1" class="hint__body active">
                               <div class="hint__body-text">If you need further help, don’t hestitate to get in touch now with any of the following options:</div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/phone-receiver.png"/>
                                   </div>
                                   <div class="hint__action-text"> +44 (0)207 100 7370</div>
                               </div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/headset.png"/>
                                   </div>
                                   <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                               </div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/support.png"/>
                                   </div>
                                   <div class="hint__action-text hint__action-text_grey"> Livechat: Online</div>
                               </div>
                           </div>
                           <div data-tab="2" class="hint__body">
                               <div class="hint__body-text">If you have any questions about your visa support application either before, during or after processing please look at our frequently asked questions, or feel free to contact us directly and we will be happy to help.</div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/phone-receiver.png"/>
                                   </div>
                                   <div class="hint__action-text"> +44 (0)207 100 7370</div>
                               </div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/headset.png"/>
                                   </div>
                                   <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                               </div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/support.png"/>
                                   </div>
                                   <div class="hint__action-text hint__action-text_grey"> Livechat: Online                                                                </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div class="input">
                       <div class="input__wrapper">
                           <label class="input__label">Surname</label>
                           <input type="text" name="" required="required" pattern="/^[a-z]{3,}$/gi" class="input__field"/>
                       </div>
                       <div class="input__error-label">This field cannot be empty</div>
                       <div class="hint">
                           <div class="hint__header">
                               <div tab="1" class="hint__tab">
                                   <div class="hint__header-text">Assistance</div>
                                   <div class="hint__header-icon">?</div>
                               </div>
                               <div tab="2" class="hint__tab hint__tab_active">
                                   <div class="hint__header-text">Further Help</div>
                                   <div class="hint__header-icon">
                                       <img src="img/phone-receiver.png"/>
                                   </div>
                               </div>
                           </div>
                           <div data-tab="1" class="hint__body active">
                               <div class="hint__body-text">If you need further help, don’t hestitate to get in touch now with any of the following options:</div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/phone-receiver.png"/>
                                   </div>
                                   <div class="hint__action-text"> +44 (0)207 100 7370</div>
                               </div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/headset.png"/>
                                   </div>
                                   <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                               </div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/support.png"/>
                                   </div>
                                   <div class="hint__action-text hint__action-text_grey"> Livechat: Online</div>
                               </div>
                           </div>
                           <div data-tab="2" class="hint__body">
                               <div class="hint__body-text">If you have any questions about your visa support application either before, during or after processing please look at our frequently asked questions, or feel free to contact us directly and we will be happy to help.</div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/phone-receiver.png"/>
                                   </div>
                                   <div class="hint__action-text"> +44 (0)207 100 7370</div>
                               </div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/headset.png"/>
                                   </div>
                                   <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                               </div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/support.png"/>
                                   </div>
                                   <div class="hint__action-text hint__action-text_grey"> Livechat: Online                                                                </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div class="radio-buttons">
                       <div class="radio-buttons__wrapper">
                           <input type="radio" name="someName" id="yes" class="radio-buttons__radio"/>
                           <label for="yes" class="radio-buttons__view">Male</label>
                       </div>
                       <div class="radio-buttons__wrapper">
                           <input type="radio" name="someName" id="no" class="radio-buttons__radio"/>
                           <label for="no" class="radio-buttons__view">Female</label>
                       </div>
                   </div>
                   <div class="input">
                       <div class="input__wrapper">
                           <label class="input__label">Date of birth</label>
                           <input type="text" pattern="/^[0-9]{2}/[0-9]{2}/[0-9]{4}$/gi" data-minYear="<%= ViewBag.MinBirthYear %>" class="datepicker_jq input__field input__field_calendar"/>
                       </div>
                       <div class="input__error-label">This field cannot be empty</div>
                       <div class="hint">
                           <div class="hint__header">
                               <div tab="1" class="hint__tab">
                                   <div class="hint__header-text">Assistance</div>
                                   <div class="hint__header-icon">?</div>
                               </div>
                               <div tab="2" class="hint__tab hint__tab_active">
                                   <div class="hint__header-text">Further Help</div>
                                   <div class="hint__header-icon">
                                       <img src="img/phone-receiver.png"/>
                                   </div>
                               </div>
                           </div>
                           <div data-tab="1" class="hint__body active">
                               <div class="hint__body-text">If you need further help, don’t hestitate to get in touch now with any of the following options:</div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/phone-receiver.png"/>
                                   </div>
                                   <div class="hint__action-text"> +44 (0)207 100 7370</div>
                               </div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/headset.png"/>
                                   </div>
                                   <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                               </div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/support.png"/>
                                   </div>
                                   <div class="hint__action-text hint__action-text_grey"> Livechat: Online</div>
                               </div>
                           </div>
                           <div data-tab="2" class="hint__body">
                               <div class="hint__body-text">If you have any questions about your visa support application either before, during or after processing please look at our frequently asked questions, or feel free to contact us directly and we will be happy to help.</div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/phone-receiver.png"/>
                                   </div>
                                   <div class="hint__action-text"> +44 (0)207 100 7370</div>
                               </div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/headset.png"/>
                                   </div>
                                   <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                               </div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/support.png"/>
                                   </div>
                                   <div class="hint__action-text hint__action-text_grey"> Livechat: Online         </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div class="d-block d-sm-flex justify-content-between mw-625">
                       <div style="width: 50%" class="input mr-3 mb-4">
                           <div class="input__wrapper">
                               <label class="input__label">Citizenship</label>
                               <br/>
                               <input type="text" readonly="readonly" pattern="/^[a-z]{3,}%/gi" style="height: 40px" class="input__select total__select total__country"/>
                               <div class="hint">
                                   <div class="hint__header">
                                       <div tab="1" class="hint__tab">
                                           <div class="hint__header-text">Assistance</div>
                                           <div class="hint__header-icon">?</div>
                                       </div>
                                       <div tab="2" class="hint__tab hint__tab_active">
                                           <div class="hint__header-text">Further Help</div>
                                           <div class="hint__header-icon">
                                               <img src="img/phone-receiver.png"/>
                                           </div>
                                       </div>
                                   </div>
                                   <div data-tab="1" class="hint__body active">
                                       <div class="hint__body-text">If you need further help, don’t hestitate to get in touch now with any of the following options:</div>
                                       <div class="hint__action">
                                           <div class="hint__action-icon">
                                               <img src="img/phone-receiver.png"/>
                                           </div>
                                           <div class="hint__action-text"> +44 (0)207 100 7370</div>
                                       </div>
                                       <div class="hint__action">
                                           <div class="hint__action-icon">
                                               <img src="img/headset.png"/>
                                           </div>
                                           <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                                       </div>
                                       <div class="hint__action">
                                           <div class="hint__action-icon">
                                               <img src="img/support.png"/>
                                           </div>
                                           <div class="hint__action-text hint__action-text_grey"> Livechat: Online</div>
                                       </div>
                                   </div>
                                   <div data-tab="2" class="hint__body">
                                       <div class="hint__body-text">If you have any questions about your visa support application either before, during or after processing please look at our frequently asked questions, or feel free to contact us directly and we will be happy to help.</div>
                                       <div class="hint__action">
                                           <div class="hint__action-icon">
                                               <img src="img/phone-receiver.png"/>
                                           </div>
                                           <div class="hint__action-text"> +44 (0)207 100 7370</div>
                                       </div>
                                       <div class="hint__action">
                                           <div class="hint__action-icon">
                                               <img src="img/headset.png"/>
                                           </div>
                                           <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                                       </div>
                                       <div class="hint__action">
                                           <div class="hint__action-icon">
                                               <img src="img/support.png"/>
                                           </div>
                                           <div class="hint__action-text hint__action-text_grey"> Livechat: Online                                                                    </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div style="width: 50%" class="input">
                           <div class="input__wrapper">
                               <label class="input__label">Passport number</label>
                               <input type="text" name="" required="required" pattern="/^[0-9]{3,}$/gi" class="input__field"/>
                           </div>
                           <div class="input__error-label">This field cannot be empty</div>
                           <div class="hint">
                               <div class="hint__header">
                                   <div tab="1" class="hint__tab">
                                       <div class="hint__header-text">Assistance</div>
                                       <div class="hint__header-icon">?</div>
                                   </div>
                                   <div tab="2" class="hint__tab hint__tab_active">
                                       <div class="hint__header-text">Further Help</div>
                                       <div class="hint__header-icon">
                                           <img src="img/phone-receiver.png"/>
                                       </div>
                                   </div>
                               </div>
                               <div data-tab="1" class="hint__body active">
                                   <div class="hint__body-text">If you need further help, don’t hestitate to get in touch now with any of the following options:</div>
                                   <div class="hint__action">
                                       <div class="hint__action-icon">
                                           <img src="img/phone-receiver.png"/>
                                       </div>
                                       <div class="hint__action-text"> +44 (0)207 100 7370</div>
                                   </div>
                                   <div class="hint__action">
                                       <div class="hint__action-icon">
                                           <img src="img/headset.png"/>
                                       </div>
                                       <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                                   </div>
                                   <div class="hint__action">
                                       <div class="hint__action-icon">
                                           <img src="img/support.png"/>
                                       </div>
                                       <div class="hint__action-text hint__action-text_grey"> Livechat: Online</div>
                                   </div>
                               </div>
                               <div data-tab="2" class="hint__body">
                                   <div class="hint__body-text">If you have any questions about your visa support application either before, during or after processing please look at our frequently asked questions, or feel free to contact us directly and we will be happy to help.</div>
                                   <div class="hint__action">
                                       <div class="hint__action-icon">
                                           <img src="img/phone-receiver.png"/>
                                       </div>
                                       <div class="hint__action-text"> +44 (0)207 100 7370</div>
                                   </div>
                                   <div class="hint__action">
                                       <div class="hint__action-icon">
                                           <img src="img/headset.png"/>
                                       </div>
                                       <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                                   </div>
                                   <div class="hint__action">
                                       <div class="hint__action-icon">
                                           <img src="img/support.png"/>
                                       </div>
                                       <div class="hint__action-text hint__action-text_grey"> Livechat: Online                                                                </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div class="d-block d-sm-flex justify-content-between mw-625">
                       <div class="input mr-3">
                           <div class="input__wrapper">
                               <label class="input__label">Date passport issued</label>
                               <input class="datepicker_jq input__field input__field_calendar passport-issued" type="text" pattern="/^[0-9]{2}/[0-9]{2}/[0-9]{4}$/gi" data-minyear="<%= ViewBag.MinPassportIssyeYear %>"/>
                           </div>
                           <div class="input__error-label">This field cannot be empty</div>
                           <div class="hint">
                               <div class="hint__header">
                                   <div tab="1" class="hint__tab">
                                       <div class="hint__header-text">Assistance</div>
                                       <div class="hint__header-icon">?</div>
                                   </div>
                                   <div tab="2" class="hint__tab hint__tab_active">
                                       <div class="hint__header-text">Further Help</div>
                                       <div class="hint__header-icon">
                                           <img src="img/phone-receiver.png"/>
                                       </div>
                                   </div>
                               </div>
                               <div data-tab="1" class="hint__body active">
                                   <div class="hint__body-text">If you need further help, don’t hestitate to get in touch now with any of the following options:</div>
                                   <div class="hint__action">
                                       <div class="hint__action-icon">
                                           <img src="img/phone-receiver.png"/>
                                       </div>
                                       <div class="hint__action-text"> +44 (0)207 100 7370</div>
                                   </div>
                                   <div class="hint__action">
                                       <div class="hint__action-icon">
                                           <img src="img/headset.png"/>
                                       </div>
                                       <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                                   </div>
                                   <div class="hint__action">
                                       <div class="hint__action-icon">
                                           <img src="img/support.png"/>
                                       </div>
                                       <div class="hint__action-text hint__action-text_grey"> Livechat: Online</div>
                                   </div>
                               </div>
                               <div data-tab="2" class="hint__body">
                                   <div class="hint__body-text">If you have any questions about your visa support application either before, during or after processing please look at our frequently asked questions, or feel free to contact us directly and we will be happy to help.</div>
                                   <div class="hint__action">
                                       <div class="hint__action-icon">
                                           <img src="img/phone-receiver.png"/>
                                       </div>
                                       <div class="hint__action-text"> +44 (0)207 100 7370</div>
                                   </div>
                                   <div class="hint__action">
                                       <div class="hint__action-icon">
                                           <img src="img/headset.png"/>
                                       </div>
                                       <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                                   </div>
                                   <div class="hint__action">
                                       <div class="hint__action-icon">
                                           <img src="img/support.png"/>
                                       </div>
                                       <div class="hint__action-text hint__action-text_grey"> Livechat: Online                                                                </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div class="input">
                           <div class="input__wrapper">
                               <label class="input__label">Date passport expires</label>
                               <input type="text" class="datepicker_jq input__field input__field_calendar passport-expired" data-maxyear="<%= ViewBag.MaxPassportExpireYear %>" pattern="/^[0-9]{2}/[0-9]{2}/[0-9]{4}$/gi" />
                           </div>
                           <div class="input__error-label">This field cannot be empty</div>
                           <div class="hint">
                               <div class="hint__header">
                                   <div tab="1" class="hint__tab">
                                       <div class="hint__header-text">Assistance</div>
                                       <div class="hint__header-icon">?</div>
                                   </div>
                                   <div tab="2" class="hint__tab hint__tab_active">
                                       <div class="hint__header-text">Further Help</div>
                                       <div class="hint__header-icon">
                                           <img src="img/phone-receiver.png"/>
                                       </div>
                                   </div>
                               </div>
                               <div data-tab="1" class="hint__body active">
                                   <div class="hint__body-text">If you need further help, don’t hestitate to get in touch now with any of the following options:</div>
                                   <div class="hint__action">
                                       <div class="hint__action-icon">
                                           <img src="img/phone-receiver.png"/>
                                       </div>
                                       <div class="hint__action-text"> +44 (0)207 100 7370</div>
                                   </div>
                                   <div class="hint__action">
                                       <div class="hint__action-icon">
                                           <img src="img/headset.png"/>
                                       </div>
                                       <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                                   </div>
                                   <div class="hint__action">
                                       <div class="hint__action-icon">
                                           <img src="img/support.png"/>
                                       </div>
                                       <div class="hint__action-text hint__action-text_grey"> Livechat: Online</div>
                                   </div>
                               </div>
                               <div data-tab="2" class="hint__body">
                                   <div class="hint__body-text">If you have any questions about your visa support application either before, during or after processing please look at our frequently asked questions, or feel free to contact us directly and we will be happy to help.</div>
                                   <div class="hint__action">
                                       <div class="hint__action-icon">
                                           <img src="img/phone-receiver.png"/>
                                       </div>
                                       <div class="hint__action-text"> +44 (0)207 100 7370</div>
                                   </div>
                                   <div class="hint__action">
                                       <div class="hint__action-icon">
                                           <img src="img/headset.png"/>
                                       </div>
                                       <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                                   </div>
                                   <div class="hint__action">
                                       <div class="hint__action-icon">
                                           <img src="img/support.png"/>
                                       </div>
                                       <div class="hint__action-text hint__action-text_grey"> Livechat: Online                                                                </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div class="input">
                       <div class="input__wrapper">
                           <label class="input__label">Email address</label>
                           <input type="text" name="" required="required" pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/gi" class="input__field"/>
                       </div>
                       <div class="input__error-label">This field cannot be empty</div>
                       <div class="hint">
                           <div class="hint__header">
                               <div tab="1" class="hint__tab">
                                   <div class="hint__header-text">Assistance</div>
                                   <div class="hint__header-icon">?</div>
                               </div>
                               <div tab="2" class="hint__tab hint__tab_active">
                                   <div class="hint__header-text">Further Help</div>
                                   <div class="hint__header-icon">
                                       <img src="img/phone-receiver.png"/>
                                   </div>
                               </div>
                           </div>
                           <div data-tab="1" class="hint__body active">
                               <div class="hint__body-text">If you need further help, don’t hestitate to get in touch now with any of the following options:</div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/phone-receiver.png"/>
                                   </div>
                                   <div class="hint__action-text"> +44 (0)207 100 7370</div>
                               </div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/headset.png"/>
                                   </div>
                                   <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                               </div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/support.png"/>
                                   </div>
                                   <div class="hint__action-text hint__action-text_grey"> Livechat: Online</div>
                               </div>
                           </div>
                           <div data-tab="2" class="hint__body">
                               <div class="hint__body-text">If you have any questions about your visa support application either before, during or after processing please look at our frequently asked questions, or feel free to contact us directly and we will be happy to help.</div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/phone-receiver.png"/>
                                   </div>
                                   <div class="hint__action-text"> +44 (0)207 100 7370</div>
                               </div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/headset.png"/>
                                   </div>
                                   <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                               </div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/support.png"/>
                                   </div>
                                   <div class="hint__action-text hint__action-text_grey"> Livechat: Online                                                                </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div class="input">
                       <div class="input__wrapper">
                           <label class="input__label">Telephone</label>
                           <input id="phone" type="tel" required="required" class="input__field"/>
                       </div>
                       <div class="input__error-label">This field cannot be empty</div>
                       <div class="hint">
                           <div class="hint__header">
                               <div tab="1" class="hint__tab">
                                   <div class="hint__header-text">Assistance</div>
                                   <div class="hint__header-icon">?</div>
                               </div>
                               <div tab="2" class="hint__tab hint__tab_active">
                                   <div class="hint__header-text">Further Help</div>
                                   <div class="hint__header-icon">
                                       <img src="img/phone-receiver.png"/>
                                   </div>
                               </div>
                           </div>
                           <div data-tab="1" class="hint__body active">
                               <div class="hint__body-text">If you need further help, don’t hestitate to get in touch now with any of the following options:</div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/phone-receiver.png"/>
                                   </div>
                                   <div class="hint__action-text"> +44 (0)207 100 7370</div>
                               </div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/headset.png"/>
                                   </div>
                                   <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                               </div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/support.png"/>
                                   </div>
                                   <div class="hint__action-text hint__action-text_grey"> Livechat: Online</div>
                               </div>
                           </div>
                           <div data-tab="2" class="hint__body">
                               <div class="hint__body-text">If you have any questions about your visa support application either before, during or after processing please look at our frequently asked questions, or feel free to contact us directly and we will be happy to help.</div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/phone-receiver.png"/>
                                   </div>
                                   <div class="hint__action-text"> +44 (0)207 100 7370</div>
                               </div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/headset.png"/>
                                   </div>
                                   <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                               </div>
                               <div class="hint__action">
                                   <div class="hint__action-icon">
                                       <img src="img/support.png"/>
                                   </div>
                                   <div class="hint__action-text hint__action-text_grey"> Livechat: Online </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>

       </div>
       <div data-step="3" class="step">
           <h2 class="step__title">details about your visit to russia</h2>
           <div class="step__description">
               <img src="img/location.png" alt="" class="mr-4"/>
               <div class="step__text">
                   <b>Time to tell us about your visit  -</b>
                   <br/>
                   <span>
                       As well as the dates you’re arriving and departing, list all the cities and hotels you’re planning at staying at during your stay.
                       You can add up to 10 separate locations below by just clicking on the ‘Add another location’ button.
                   </span>
               </div>
           </div>
           <div class="first-entry">
               <label class="input__label">Entry 1 - Arrival and departure travel dates </label>
               <div class="d-block d-sm-flex justify-content-between mw-625">
               <div class="input mr-3">
                   <div class="input__wrapper">
                       <label class="input__label">Arrival Date</label>
                       <input type="text" data-minYear="<%= ViewBag.MinVisitEntryYear %>" pattern="/^[0-9]{2}/[0-9]{2}/[0-9]{4}$/gi" class="datepicker_jq input__field input__field_calendar arrival-date"/>
                   </div>
                   <div class="input__error-label">This field cannot be empty</div>
               </div>
               <div class="input mr-3">
                   <div class="input__wrapper">
                       <label class="input__label">Departure Date</label>
                       <input type="text"  data-maxYear="<%= ViewBag.MaxVisitExitYear %>" pattern="/^[0-9]{2}/[0-9]{2}/[0-9]{4}$/gi" class="datepicker_jq input__field input__field_calendar departure-date"/>
                   </div>
                   <div class="input__error-label">This field cannot be empty</div>
               </div>
           </div>
           </div>
           <div class="second-entry">
               <label class="input__label">Entry 2 - Arrival and departure travel dates </label>
               <div class="d-block d-sm-flex justify-content-between mw-625">
               <div class="input mr-3">
                   <div class="input__wrapper disabled">
                       <label class="input__label">Arrival Date</label>
                       <input disabled type="text" data-minYear="<%= ViewBag.MinVisitEntryYear %>" pattern="/^[0-9]{2}/[0-9]{2}/[0-9]{4}$/gi" class="datepicker_jq input__field input__field_calendar arrival-date"/>
                   </div>
                   <div class="input__error-label">This field cannot be empty</div>
               </div>
               <div class="input mr-3">
                   <div class="input__wrapper disabled">
                       <label class="input__label">Departure Date</label>
                       <input disabled type="text"  data-maxYear="<%= ViewBag.MaxVisitExitYear %>" pattern="/^[0-9]{2}/[0-9]{2}/[0-9]{4}$/gi" class="datepicker_jq input__field input__field_calendar departure-date"/>
                   </div>
                   <div class="input__error-label">This field cannot be empty</div>
               </div>
           </div>
           </div>
           <div class="step__subtitle">
               <div class="step__subtitle-text">Location 1</div>
               <div class="step__subtitle-icon"></div>
           </div>
           <div class="step__subtitle-content">
               <div class="input mt-4">
                   <div class="input__wrapper">
                       <label class="input__label">City</label>
                       <select class="input__select input-city">
                           <option selected disabled hidden>Please select</option>
                           <%
                           dim city
                           for each city in ViewBag.Cities %>
                                <option value="<%= city %>">
                                    <%= city %>
                                </option>
                            <% next %>
                       </select>
                   </div>
                   <div class="input__error-label">This field cannot be empty</div>
                   <div class="hint">
                       <div class="hint__header">
                           <div tab="1" class="hint__tab">
                               <div class="hint__header-text">Assistance</div>
                               <div class="hint__header-icon">?</div>
                           </div>
                           <div tab="2" class="hint__tab hint__tab_active">
                               <div class="hint__header-text">Further Help</div>
                               <div class="hint__header-icon">
                                   <img src="img/phone-receiver.png"/>
                               </div>
                           </div>
                       </div>
                       <div data-tab="1" class="hint__body active">
                           <div class="hint__body-text">If you need further help, don’t hestitate to get in touch now with any of the following options:</div>
                           <div class="hint__action">
                               <div class="hint__action-icon">
                                   <img src="img/phone-receiver.png"/>
                               </div>
                               <div class="hint__action-text"> +44 (0)207 100 7370</div>
                           </div>
                           <div class="hint__action">
                               <div class="hint__action-icon">
                                   <img src="img/headset.png"/>
                               </div>
                               <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                           </div>
                           <div class="hint__action">
                               <div class="hint__action-icon">
                                   <img src="img/support.png"/>
                               </div>
                               <div class="hint__action-text hint__action-text_grey"> Livechat: Online</div>
                           </div>
                       </div>
                       <div data-tab="2" class="hint__body">
                           <div class="hint__body-text">If you have any questions about your visa support application either before, during or after processing please look at our frequently asked questions, or feel free to contact us directly and we will be happy to help.</div>
                           <div class="hint__action">
                               <div class="hint__action-icon">
                                   <img src="img/phone-receiver.png"/>
                               </div>
                               <div class="hint__action-text"> +44 (0)207 100 7370</div>
                           </div>
                           <div class="hint__action">
                               <div class="hint__action-icon">
                                   <img src="img/headset.png"/>
                               </div>
                               <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                           </div>
                           <div class="hint__action">
                               <div class="hint__action-icon">
                                   <img src="img/support.png"/>
                               </div>
                               <div class="hint__action-text hint__action-text_grey"> Livechat: Online                                                                                </div>
                           </div>
                       </div>
                   </div>
               </div>
               <div class="input mt-4">
                   <div class="input__wrapper">
                       <label class="input__label">Hotel</label>
                       <select class="input__select">
                           <option value="">Ahtuba</option>
                           <option value="">Dream in Reallity</option>
                       </select>
                   </div>
                   <div class="input__error-label">This field cannot be empty</div>
                   <div class="hint">
                       <div class="hint__header">
                           <div tab="1" class="hint__tab">
                               <div class="hint__header-text">Assistance</div>
                               <div class="hint__header-icon">?</div>
                           </div>
                           <div tab="2" class="hint__tab hint__tab_active">
                               <div class="hint__header-text">Further Help</div>
                               <div class="hint__header-icon">
                                   <img src="img/phone-receiver.png"/>
                               </div>
                           </div>
                       </div>
                       <div data-tab="1" class="hint__body active">
                           <div class="hint__body-text">If you need further help, don’t hestitate to get in touch now with any of the following options:</div>
                           <div class="hint__action">
                               <div class="hint__action-icon">
                                   <img src="img/phone-receiver.png"/>
                               </div>
                               <div class="hint__action-text"> +44 (0)207 100 7370</div>
                           </div>
                           <div class="hint__action">
                               <div class="hint__action-icon">
                                   <img src="img/headset.png"/>
                               </div>
                               <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                           </div>
                           <div class="hint__action">
                               <div class="hint__action-icon">
                                   <img src="img/support.png"/>
                               </div>
                               <div class="hint__action-text hint__action-text_grey"> Livechat: Online</div>
                           </div>
                       </div>
                       <div data-tab="2" class="hint__body">
                           <div class="hint__body-text">If you have any questions about your visa support application either before, during or after processing please look at our frequently asked questions, or feel free to contact us directly and we will be happy to help.</div>
                           <div class="hint__action">
                               <div class="hint__action-icon">
                                   <img src="img/phone-receiver.png"/>
                               </div>
                               <div class="hint__action-text"> +44 (0)207 100 7370</div>
                           </div>
                           <div class="hint__action">
                               <div class="hint__action-icon">
                                   <img src="img/headset.png"/>
                               </div>
                               <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                           </div>
                           <div class="hint__action">
                               <div class="hint__action-icon">
                                   <img src="img/support.png"/>
                               </div>
                               <div class="hint__action-text hint__action-text_grey"> Livechat: Online                                                                                </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div class="step__subtitle">
               <div class="step__subtitle-text">Location 2</div>
               <div class="step__subtitle-icon"></div>
           </div>
           <div class="step__subtitle-content">
               <div class="input mt-4">
                   <div class="input__wrapper">
                       <label class="input__label">City</label>
                       <select class="input__select">
                           <option value="">Moscow</option>
                           <option value="">Volgograd</option>
                           <option value="">Kazan</option>
                       </select>
                   </div>
                   <div class="hint">
                       <div class="hint__header">
                           <div tab="1" class="hint__tab">
                               <div class="hint__header-text">Assistance</div>
                               <div class="hint__header-icon">?</div>
                           </div>
                           <div tab="2" class="hint__tab hint__tab_active">
                               <div class="hint__header-text">Further Help</div>
                               <div class="hint__header-icon">
                                   <img src="img/phone-receiver.png"/>
                               </div>
                           </div>
                       </div>
                       <div data-tab="1" class="hint__body active">
                           <div class="hint__body-text">If you need further help, don’t hestitate to get in touch now with any of the following options:</div>
                           <div class="hint__action">
                               <div class="hint__action-icon">
                                   <img src="img/phone-receiver.png"/>
                               </div>
                               <div class="hint__action-text"> +44 (0)207 100 7370</div>
                           </div>
                           <div class="hint__action">
                               <div class="hint__action-icon">
                                   <img src="img/headset.png"/>
                               </div>
                               <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                           </div>
                           <div class="hint__action">
                               <div class="hint__action-icon">
                                   <img src="img/support.png"/>
                               </div>
                               <div class="hint__action-text hint__action-text_grey"> Livechat: Online</div>
                           </div>
                       </div>
                       <div data-tab="2" class="hint__body">
                           <div class="hint__body-text">If you have any questions about your visa support application either before, during or after processing please look at our frequently asked questions, or feel free to contact us directly and we will be happy to help.</div>
                           <div class="hint__action">
                               <div class="hint__action-icon">
                                   <img src="img/phone-receiver.png"/>
                               </div>
                               <div class="hint__action-text"> +44 (0)207 100 7370</div>
                           </div>
                           <div class="hint__action">
                               <div class="hint__action-icon">
                                   <img src="img/headset.png"/>
                               </div>
                               <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                           </div>
                           <div class="hint__action">
                               <div class="hint__action-icon">
                                   <img src="img/support.png"/>
                               </div>
                               <div class="hint__action-text hint__action-text_grey"> Livechat: Online                                                                                </div>
                           </div>
                       </div>
                   </div>
               </div>
               <div class="input mt-4">
                   <div class="input__wrapper">
                       <label class="input__label">Hotel</label>
                       <select class="input__select">
                           <option value="">Ahtuba</option>
                           <option value="">Dream in Reallity</option>
                       </select>
                   </div>
                   <div class="hint">
                       <div class="hint__header">
                           <div tab="1" class="hint__tab">
                               <div class="hint__header-text">Assistance</div>
                               <div class="hint__header-icon">?</div>
                           </div>
                           <div tab="2" class="hint__tab hint__tab_active">
                               <div class="hint__header-text">Further Help</div>
                               <div class="hint__header-icon">
                                   <img src="img/phone-receiver.png"/>
                               </div>
                           </div>
                       </div>
                       <div data-tab="1" class="hint__body active">
                           <div class="hint__body-text">If you need further help, don’t hestitate to get in touch now with any of the following options:</div>
                           <div class="hint__action">
                               <div class="hint__action-icon">
                                   <img src="img/phone-receiver.png"/>
                               </div>
                               <div class="hint__action-text"> +44 (0)207 100 7370</div>
                           </div>
                           <div class="hint__action">
                               <div class="hint__action-icon">
                                   <img src="img/headset.png"/>
                               </div>
                               <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                           </div>
                           <div class="hint__action">
                               <div class="hint__action-icon">
                                   <img src="img/support.png"/>
                               </div>
                               <div class="hint__action-text hint__action-text_grey"> Livechat: Online</div>
                           </div>
                       </div>
                       <div data-tab="2" class="hint__body">
                           <div class="hint__body-text">If you have any questions about your visa support application either before, during or after processing please look at our frequently asked questions, or feel free to contact us directly and we will be happy to help.</div>
                           <div class="hint__action">
                               <div class="hint__action-icon">
                                   <img src="img/phone-receiver.png"/>
                               </div>
                               <div class="hint__action-text"> +44 (0)207 100 7370</div>
                           </div>
                           <div class="hint__action">
                               <div class="hint__action-icon">
                                   <img src="img/headset.png"/>
                               </div>
                               <div class="hint__action-text hint__action-text_black"> Click to Call</div>
                           </div>
                           <div class="hint__action">
                               <div class="hint__action-icon">
                                   <img src="img/support.png"/>
                               </div>
                               <div class="hint__action-text hint__action-text_grey"> Livechat: Online                                                                                </div>
                           </div>
                       </div>
                   </div>
               </div>
               <div class="step__note my-4">
                   <div class="step__note-text">To apply for your visa, in some situations we may need to provide your data to the XXXX etc.
                       <br/>
                       <br/>Real Russia Limited will not; sell, rent, share, or otherwise disclose the email addresses or other personally identifiable information to third parties without your consent.
                       <br/>
                       <br/>By submitting this application, you should be aware that in some situations we will need to provide personal data to our suppliers and partners to effect the provision of the service.
                       <br/>
                       <br/>For more information please refer to our Privacy Statement.
                   </div>
               </div>
               <div class="radio-buttons__title">Would you like to join our monthly newsletter list?</div>
               <div class="radio-buttons">
                   <div class="radio-buttons__wrapper">
                       <input type="radio" name="someName1" id="yes1" class="radio-buttons__radio"/>
                       <label for="yes1" class="radio-buttons__view">Yes</label>
                   </div>
                   <div class="radio-buttons__wrapper">
                       <input type="radio" checked="checked" name="someName1" id="no1" class="radio-buttons__radio"/>
                       <label for="no1" class="radio-buttons__view">No</label>
                   </div>
               </div>
               <div class="radio-buttons__title">Would you like to join our mailing list for special offers, news and information?     </div>
               <div class="radio-buttons">
                   <div class="radio-buttons__wrapper">
                       <input type="radio" name="someName2" id="yes2" class="radio-buttons__radio"/>
                       <label for="yes2" class="radio-buttons__view">Yes</label>
                   </div>
                   <div class="radio-buttons__wrapper">
                       <input type="radio" checked="checked" name="someName2" id="no2" class="radio-buttons__radio"/>
                       <label for="no2" class="radio-buttons__view">No</label>
                   </div>
               </div>
               <div class="radio-buttons__title font-weight-bold">I have read and understood
                   <a href="#">terms and conditions    </a>
               </div>
               <div class="radio-buttons">
                   <div class="radio-buttons__wrapper">
                       <input type="radio" name="someName3" id="yes3" class="radio-buttons__radio"/>
                       <label for="yes3" class="radio-buttons__view">Yes</label>
                   </div>
                   <div class="radio-buttons__wrapper">
                       <input type="radio" checked="checked" name="someName3" id="no3" class="radio-buttons__radio"/>
                       <label for="no3" class="radio-buttons__view">No  </label>
                   </div>
               </div>
           </div>
       </div>
       <div data-step="4" class="step">
           <h2 class="step__title">VISA SUPPORT APPLICATION Order Summary</h2>
           <div class="step__description">
               <div class="step__text">Thank you
                   <span class="color-red">PAUL BRADLEY</span>, your Real Russian Tourist Visa Support application has been submitted to our database and is ready for processing.
                   Your reference number is:
                   <b>SSSD - 13611 - D7326 - PB</b>
               </div>
           </div>
           <hr/>
           <table class="total-table">
               <tr>
                   <td>Single entry visa</td>
                   <td>£15.30</td>
               </tr>
               <tr>
                   <td>No registration service needed</td>
                   <td>£0.00</td>
               </tr>
               <tr>
                   <td class="font-weight-bold">TOTAL PRICE</td>
                   <td class="color-red font-weight-bold">£15.30</td>
               </tr>
           </table>
           <hr/>
           <div class="step__note">
               The visa support document applied for will be valid for processing a visa for the named person to enter Russia on or after <not specified> and they must leave Russia on or before <not specified>. The visa will allow one entry to and one exit from Russia during this period. It is the applicant’s responsibility to confirm that the visa support document/visa meet their requirements before they process the visa, or travel or use the visa itself.
               Please note that once the visa support is issued, no refunds are possible.
           </div>
           <div class="radio-buttons__title font-weight-bold">Having completed my application, I agree that the above visa application is suitable.</div>
           <div class="radio-buttons">
               <div class="radio-buttons__wrapper">
                   <input type="radio" checked="checked" name="someName4" id="yes4" class="radio-buttons__radio"/>
                   <label for="yes4" class="radio-buttons__view">Yes</label>
               </div>
               <div class="radio-buttons__wrapper">
                   <input type="radio" name="someName4" id="no4" class="radio-buttons__radio"/>
                   <label for="no4" class="radio-buttons__view">No</label>
               </div>
           </div>
           <div class="step__note">You can now proceed to payment</div>
           <div class="mt-4 mt-lg-0">
               <b class="color-red">SECURE PAYMENT PROCESSING</b>
               <div class="step__note">Text about how secure payment is Text about how secure payment is Text about how secure payment is</div>
               <div class="d-flex">
                   <img src="img/mastercard.png" alt="Mastercard" class="mr-2"/>
                   <img src="img/visa.png" alt="visa" class="mr-2"/>
                   <img src="img/visa-debit.png" alt="visa-debit" class="mr-2"/>
                   <img src="img/american-express.png" alt="american-express"/>
               </div>
           </div>
           <div class="container">
               <h2 class="step__title">PAYMENT</h2>
               <div class="step__description">
                   <img src="img/payment.png" alt="" class="mr-4 mb-2"/>
                   <div class="step__text">
                       <b>Make a secure online payment for your visa support documents.</b>We have sent an email to
                       <span class="color-red">paul@psbweb.co.uk </span>with details of alternative payment methods should you prefer not to pay by credit/debit card.
                   </div>
               </div>
               <div class="input">
                   <div class="input__wrapper">
                       <label class="input__label">First name</label>
                       <input type="text" name="" required="required" pattern="/^[a-z]{2,5}$/gi" class="input__field"/>
                   </div>
                   <div class="input__error-label">This field cannot be empty</div>
               </div>
               <div class="input">
                   <div class="input__wrapper">
                       <label class="input__label">Surname</label>
                       <input type="text" name="" required="required" pattern="/^[a-z]{2,5}$/gi" class="input__field"/>
                   </div>
                   <div class="input__error-label">This field cannot be empty</div>
               </div>
               <div class="d-flex flex-wrap flex-md-nowrap">
                   <div class="input mr-0 mr-md-5">
                       <div class="input__wrapper">
                           <label class="input__label">House number/name</label>
                           <input type="text" name="" required="required" pattern="/^[0-9a-z]{1,}$/gi" class="input__field"/>
                       </div>
                       <div class="input__error-label">This field cannot be empty</div>
                   </div>
                   <div class="input mr-0 mr-md-4">
                       <div class="input__wrapper">
                           <label class="input__label">Postcode</label>
                           <input type="text" name="" required="required" pattern="/^[0-9]{3,}$/gi" class="input__field"/>
                       </div>
                       <div class="input__error-label">This field cannot be empty</div>
                   </div>
               </div>
               <div class="input">
                   <div class="input__wrapper">
                       <label class="input__label">Card type</label>
                       <select class="input__select">
                           <option value="">Visa Debit</option>
                           <option value="">American Express</option>
                           <option value="">Mastercard</option>
                       </select>
                   </div>
               </div>
               <div class="input mt-4">
                   <div class="input__wrapper">
                       <label class="input__label">Card number</label>
                       <input type="text" name="" required="required" pattern="/^[0-9]{4}(\s{1})?[0-9]{4}(\s{1})?[0-9]{4}(\s{1})?[0-9]{4}(\s{1})?$/gi" class="input__field"/>
                   </div>
                   <div class="input__error-label">This field cannot be empty</div>
               </div>
               <div class="d-flex flex-wrap flex-md-nowrap">
                   <div class="input mr-0 mr-md-5">
                       <div class="input__wrapper">
                           <label class="input__label">Expiry date</label>
                           <input type="text" pattern="/^[0-9]{2}/[0-9]{2}/[0-9]{4}$/gi" class="datepicker_jq input__field input__field_calendar"/>
                       </div>
                       <div class="input__error-label">This field cannot be empty</div>
                   </div>
                   <div class="input mr-0 mr-md-4">
                       <div class="input__wrapper">
                           <label class="input__label">CCV</label>
                           <input type="text" name="" required="required" pattern="/^[0-9]{2,3}$/gi" class="input__field"/>
                       </div>
                       <div class="input__error-label">This field cannot be empty</div>
                   </div>
               </div>
           </div>
       </div>
   </div>
   <div class="container">
       <div class="d-block d-sm-flex jc-sb mw-660 mt-19 mb-35">
           <button class="button mr-3 mb-3">Save progress</button>
           <div>
               <button data-role="prevStep" class="button border-red color-red bg-white mr-2 mb-3">< previous step</button>
               <button data-role="nextStep" class="button button_red mb-3">next step ></button>
           </div>
       </div>
   </div>
</main>
<% end sub %>
