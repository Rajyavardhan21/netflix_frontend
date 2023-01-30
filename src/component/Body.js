import tvbox from '../Assets/tvbox.png'
import videotv from '../Assets/video-tv.m4v'
import milly from '../Assets/milly.jpg'
import album from '../Assets/Album.jpg'
import dowloadicon from '../Assets/download-icon.gif'
import mactv from '../Assets/Mactv.png'
import videoeverywhere from '../Assets/video-everywhere.m4v'
import kidsimg from '../Assets/Kidsimg.png'
import { Link } from 'react-router-dom'



function Body() {

    return <div>
        <div className="tv w-100 text-white d-flex justify-content-center">
            <div className="tv-content row d-flex justify-content-center">
                <div
                    className="col-12 col-lg-6 p-lg-4 p-0 d-flex flex-column justify-content-center"
                >
                    <h1 className="ft-heading">Enjoy on your TV.</h1>
                    <h3 className="ft-desc">
                        Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                        Blu-ray players and more.
                    </h3>
                </div>
                <div
                    className="videoGIf col-10 col-md-6 d-flex flex-column justify-content-center position-relative align-items-center"
                >
                    <img src={tvbox} className="tv-frame" alt="" />
                    <video className="box-video" autoPlay playsInline muted loop>
                        <source
                            src={videotv}
                            type="video/mp4"
                        />
                    </video>
                </div>
            </div>
        </div>
        <div className="tv w-100 text-white d-flex justify-content-center">
            <div className="tv-content row d-flex justify-content-center">
                <div
                    className="downloadImgDiv col-10 col-md-6 order-lg-1 order-2 d-flex flex-column justify-content-center position-relative align-items-center"
                >
                    <img
                        src={milly}
                        className="tv-frame"
                        alt=""
                    />
                    <div className="img-over">
                        <img
                            src={album}
                            alt=""
                        />
                        <div className="img-over-desc">
                            <h6>Stranger Things</h6>
                            <p>Downloading...</p>
                        </div>
                        <img src={dowloadicon} alt="" />
                    </div>
                </div>
                <div
                    className="col-12 col-lg-6 p-lg-4 p-0 order-lg-2 order-1 d-flex flex-column justify-content-center"
                >
                    <h1 className="ft-heading">Download your shows to watch offline.</h1>
                    <h3 className="ft-desc">
                        Save your favourites easily and always have something to watch.
                    </h3>
                </div>
            </div>
        </div>
        <div className="tv w-100 text-white d-flex justify-content-center">
            <div className="tv-content row d-flex justify-content-center">
                <div
                    className="col-12 col-lg-6 p-lg-4 p-0 d-flex flex-column justify-content-center"
                >
                    <h1 className="ft-heading">Watch everywhere.</h1>
                    <h3 className="ft-desc">
                        Stream unlimited movies and TV shows on your phone, tablet,
                        laptop, and TV.
                    </h3>
                </div>
                <div
                    className="videoGIf col-10 col-md-6 d-flex flex-column justify-content-center position-relative align-items-center"
                >
                    <img
                        src={mactv}
                        className="tv-frame"
                        alt=""
                    />
                    <video className="box-video-img" autoPlay playsInline muted loop>
                        <source
                            src={videoeverywhere}
                            type="video/mp4"
                        />
                    </video>
                </div>
            </div>
        </div>
        <div className="tv w-100 text-white d-flex justify-content-center">
            <div className="tv-content row d-flex justify-content-center">
                <div
                    className="col-10 col-md-6 order-lg-1 order-2 d-flex flex-column justify-content-center position-relative align-items-center"
                >
                    <img
                        src={kidsimg}
                        className="tv-frame"
                        alt=""
                    />
                </div>
                <div
                    className="col-12 col-lg-6 p-lg-4 p-0 order-lg-2 order-1 d-flex flex-column justify-content-center"
                >
                    <h1 className="ft-heading">Create profiles for children.</h1>
                    <h3 className="ft-desc">
                        Send children on adventures with their favourite characters in a
                        space made just for them—free with your membership.
                    </h3>
                </div>
            </div>
        </div>
        <div
            className="faq-div w-100 d-flex flex-column justify-content-center align-items-center"
        >
            <h1 className="question-heading text-white text-center">Frequently Asked Questions</h1>
            <div className="faqs  " action="">


                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What is Netflix?
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body bg-dark text-white">
                                Netflix is a streaming service that offers a wide variety of
                                award-winning TV shows, movies, anime, documentaries and more –
                                on thousands of internet-connected devices. <br />
                                <br />
                                You can watch as much as you want, whenever you want, without a
                                single ad – all for one low monthly price. There's always
                                something new to discover, and new TV shows and movies are added
                                every week!
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How much does Netflix costs ?
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body bg-dark text-white">
                                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                                streaming device, all for one fixed monthly fee. Plans range
                                from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item ">
                        <h2 class="accordion-header " id="headingThree">
                            <button class="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Where i can watch?
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body bg-dark text-white">
                                Watch anywhere, anytime. Sign in with your Netflix account to
                                watch instantly on the web at netflix.com from your personal
                                computer or on any internet-connected device that offers the
                                Netflix app, including smart TVs, smartphones, tablets,
                                streaming media players and game consoles.
                                <br /><br />

                                You can also download your favourite shows with the iOS,
                                Android, or Windows 10 app. Use downloads to watch while you're
                                on the go and without an internet connection. Take Netflix with
                                you anywhere.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header bg-dark " id="headingThree">
                            <button class="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                How do i cancel ?
                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse  bg-dark " aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body bg-dark text-white">
                                Netflix is flexible. There are no annoying contracts and no
                                commitments. You can easily cancel your account online in two
                                clicks. There are no cancellation fees – start or stop your
                                account anytime.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                What can I watch on Netflix ?
                            </button>
                        </h2>
                        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body bg-dark text-white">
                                Netflix has an extensive library of feature films,
                                documentaries, TV shows, anime, award-winning Netflix originals,
                                and more. Watch as much as you want, anytime you want.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Is Netflix good for Kids?
                            </button>
                        </h2>
                        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body bg-dark text-white">
                                The Netflix Kids experience is included in your membership to
                                give parents control while kids enjoy family-friendly TV shows
                                and films in their own space.
                                <br /><br />

                                Kids profiles come with PIN-protected parental controls that let
                                you restrict the maturity rating of content kids can watch and
                                block specific titles you don’t want kids to see.
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <h3 className="text-white text-center sub-heading">Ready to watch? Enter your email to create or restart your membership.</h3>

            <div className="row inputRow justify-content-center gy-3">
                <input
                    type="Email"
                    placeholder="Email Address"
                    className=" col-sm-6 col-7 p-2 px-5 "
                />
                <button className=" col-sm-3 col-6 fs-6  email-button ">
                    <Link to={'/login'} className="text-decoration-none text-reset">Get started </Link>
                    <i className="zmdi zmdi-chevron-right"></i>
                </button>>
            </div>
        </div>
    </div>

}

export default Body;