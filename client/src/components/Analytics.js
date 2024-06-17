import React from "react";
import { Progress } from 'antd'

const Analytics = ({ allTransection }) => {

    //categoty
    const categories = ['salary', 'tip', 'project', 'food', 'groceries', 'movie', 'bills', 'rent', 'fee', 'medical', 'tax', 'others']

    // total transections
    const totalTransection = allTransection.length
    const totalIncomeTransactions = allTransection.filter(transection => transection.type === 'income')
    const totalExpenseTransactions = allTransection.filter(transection => transection.type === 'expense')
    const totalIncomePercent = (totalIncomeTransactions.length/totalTransection) * 100
    const totalExpensePercent = (totalExpenseTransactions.length/totalTransection) * 100

    //total turnover
    const totalTurnover = allTransection.reduce(
        (acc,transection) => acc + transection.amount,0
    );

    const totalIncomeTurnover = allTransection.filter(
        transection => transection.type === 'income'
    ).reduce((acc,transection) => acc + transection.amount,0);

    const totalExpenseTurnover = allTransection.filter(
        transection => transection.type === 'expense'
    ).reduce((acc,transection) => acc + transection.amount,0);

    const totalIncomeTurnoverPercent = (totalIncomeTurnover/totalTurnover) * 100;
    const totalExpenseTurnoverPercent = (totalExpenseTurnover/totalTurnover) * 100;

    return (
        <>
            <div className="row m-3">
                <div className="col-md-3 analytics-width">
                    <div className="card">
                        <div className="card-header">
                            Total Transections : {totalTransection}
                        </div>
                        <div className="card-body">
                            <h5 className="text-success">Income : {totalIncomeTransactions.length}</h5>
                            <h5 className="text-danger">Expense : {totalExpenseTransactions.length}</h5>
                            <div className="container d-flex justify-content-around"> 
                                <Progress type="circle" 
                                strokeColor={'green'} 
                                className="mx-2"
                                percent={totalIncomePercent.toFixed(0)}
                                />
                                <Progress type="circle" 
                                strokeColor={'red'} 
                                className="mx-2"
                                percent={totalExpensePercent.toFixed(0)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 analytics-width">
                    <div className="card">
                        <div className="card-header">
                            Total Turnover : {totalTurnover}
                        </div>
                        <div className="card-body">
                            <h5 className="text-success">Income : {totalIncomeTurnover}</h5>
                            <h5 className="text-danger">Expense : {totalExpenseTurnover}</h5>
                            <div className="container d-flex justify-content-around">
                                <Progress type="circle" 
                                strokeColor={'green'} 
                                className="mx-2"
                                percent={totalIncomeTurnoverPercent.toFixed(0)}
                                />
                                <Progress type="circle" 
                                strokeColor={'red'} 
                                className="mx-2 mt3"
                                percent={totalExpenseTurnoverPercent.toFixed(0)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="row m-3">
                <div className="col-md-3 analytics-width">
                    <div className="card">
                    <h4 className="card-header">Categorywise Income</h4>
                    {
                        categories.map(category => {
                            const amount = allTransection
                            .filter(
                                transection => transection.type === 'income' && 
                                transection.category === category
                            ).reduce((acc,transection) => acc + transection.amount,0);
                            return (
                                amount > 0 && (
                                <div className="card">
                                    <div className="card-body">
                                        <h5>{category}</h5>
                                        <Progress strokeColor={'green'}
                                         percent={((amount/totalIncomeTurnover)*100).toFixed(0)}
                                        />
                                    </div>
                                </div>
                                )
                            )
                        })
                    }
                    </div>
                </div>
                <div className="col-md-3 analytics-width">
                <div className="card">
                    <h4 className="card-header">Categorywise Expense</h4>
                    {
                        categories.map(category => {
                            const amount = allTransection
                            .filter(
                                transection => transection.type === 'expense' && 
                                transection.category === category
                            ).reduce((acc,transection) => acc + transection.amount,0);
                            return (
                                amount > 0 && (
                                <div className="card">
                                    <div className="card-body">
                                        <h5>{category}</h5>
                                        <Progress strokeColor={'red'}
                                        percent={((amount/totalExpenseTurnover)*100).toFixed(0)}/>
                                    </div>
                                </div>
                                )
                            )
                        })
                    }
                    </div>
                </div>
            </div>
            </>
    )
}

export default Analytics