

#risk_list includes the list of funds based on risk : low, moderately_low, moderate, moderately_high, high
# put low risk funds in risk_list['low']
# put moderately_low risk funds in risk_list['moderately_low'] and so on....
risk_list={}

# mutual_funds_details includes a list of each funds. 1st column says the maturity period: short, medium, long
#  2ND  column is taken from "Brief Investment Objective and Kind of Product" of the pdf
mutual_funds_details={}
mutual_funds_details['Aditya Birla Sun Life Overnight Fund']=['short','Investment in debt and Money Market Instruments upto 1 day']
mutual_funds_details['HSBC Overnight Fund']=['short','Investment in debt & money market instruments with overnight maturity']
mutual_funds_details['HSBC Cash Fund']=['short','Investment in money market instruments']


risk_list['low']=['Aditya Birla Sun Life Overnight Fund','HSBC Overnight Fund','HSBC Cash Fund']


#4. HDFC Liquid Fund
mutual_funds_details['HDFC Liquid Fund']=['short','To generate income through a portfolio comprising money market and debt instruments']
risk_list['low'].append('HDFC Liquid Fund')

#5 HDFC Overnight Fund

print(risk_list['low'])