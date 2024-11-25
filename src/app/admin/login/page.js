import React from 'react'
import Link from "next/link";

const LoginPage = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Giriş Yap</h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-user"
                                                       id="exampleInputEmail" aria-describedby="emailHelp"
                                                       placeholder="E-Mail Adresiniz..."/>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user"
                                                       id="exampleInputPassword" placeholder="Şifreniz..."/>
                                            </div>
                                            <Link href={"/admin"} className="btn btn-primary btn-user btn-block">
                                                Giriş yap
                                            </Link>
                                            <hr/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
