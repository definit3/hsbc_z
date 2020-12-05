
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
mutual_funds_details['HSBC Liquid Fund']=['short','To generate income through a portfolio comprising money market and debt instruments']
mutual_funds_details['HSBC Overnight Fund']=['short','To generate returns by investing in debt and money market instruments']
mutual_funds_details['ICICI Prudential Liquid Fund']=['short','A liquid fund that aims to provide reasonable returns commensurate with low risk and providing a high level of liquidity']
mutual_funds_details['Aditya Birla Sun Life Savings Fund']=['short','Investments in debt and money market instruments']
mutual_funds_details['HDFC Arbitrage Fund']=['short','Income through arbitrage opportunities between cash and derivative market and arbitrage opportunities within the derivative segment']
mutual_funds_details['HDFC Ultra Short Term Fund']=['short','Income/capital appreciation through investments in debt securities and money market instruments']
mutual_funds_details['HSBC Short Duration Fund']=['medium','Investment in diversified portfolio of fixed income securities such that the Macaulay^ duration of the portfolio is between 1 year to 3 years']
mutual_funds_details['HDFC Short Term Debt Fund']=['short','To generate income / capital appreciation through investments in debt and money']
mutual_funds_details['ICICI Prudential Savings Fund']=['short','An open ended low duration debt scheme that aims to maximise income by investing in debt and money market instruments while maintaining optimum balance of yield, safety and liquidity']
mutual_funds_details['HSBC Ultra Short Duration Fund']=['short','Investment in debt & money market instruments such that the Macaulay Duration of the portfolio is between 3 month – 6 months']
mutual_funds_details['Kotak Bond Short Term Fund']=['medium','Investment in debt & money market securities with portfolio Macaulay duration between 1 year & 3 years']
mutual_funds_details['HDFC Income Fund']=['medium','To optimise returns while maintaining a balance of safety, yield and liquidity by investment in debt and money market instruments']
mutual_funds_details['HSBC Corporate Bond Fund']=['medium','Investment predominantly in corporate bond securities rated AA+ and above']
mutual_funds_details['HSBC Flexi Debt Fund']=['long','Investment in debt/money market instruments']
mutual_funds_details['ICICI Prudential Credit Risk Fund']=['medium','A debt fund that aims to deliver consistent performance by investing in a basket of debt and money market instruments with a view to provide reasonable returns while maintaining optimum balance of safety, liquidity and yield']
mutual_funds_details['IDFC Dynamic Bond Fund']=['long','Investments in high quality money market and debt instruments including G-Sec securities']
mutual_funds_details['L&T Triple Ace Bond Fund']=['long','Investment in debt market securities such as non-convertible debentures, bonds issued by corporates and bank']
mutual_funds_details['ICICI Prudential Corporate Bond Fund']=['short','An open ended debt scheme predominantly investing in highest rated corporate bonds.']
mutual_funds_details['IDFC Corporate Bond Fund']=['medium','Investment predominantly in high quality corporate bond']
mutual_funds_details['HDFC Credit Risk Fund']=['short','To generate income/capital appreciation by investing predominantly in AA and below rated corporate debt (excluding AA+ rated corporate bonds)']
mutual_funds_details['Kotak Low Duration Fund']=['short','Income by focusing on low duration securities with portfolio Macaulay duration between 6 months and 12 months']
mutual_funds_details['Aditya Birla Sun Life MNC Fund']=['long','Investments primarily in equity and equity-related securities of Multinational Companies (MNCs)']
mutual_funds_details['Axis Bluechip Fund']=['long','Investment in diversified portfolio predominantly consisting of equity and equity related instruments of large cap companies']
mutual_funds_details['DSP Top 100 Equity Fund']=['long','Investment in equity and equity-related securities of large cap companies (top 100 companies by market capitalisation)']
mutual_funds_details['Franklin India Prima Fund']=['long','A fund that invests in mid and small cap stocks']
mutual_funds_details['HSBC Focused Equity Fund']=['long','Investment in equity and equity related securities across market capitalization in maximum 30 stocks']
mutual_funds_details['HDFC Gold Fund']=['long','Investment in units of HDFC Gold Exchange Traded Fund (HGETF). HGETF invests in gold bullion of 0.995 fineness']
mutual_funds_details['HSBC Multi Cap Equity Fund']=['long','Investment in equity and equity-related securities across market capitalisation']
mutual_funds_details['HSBC Regular Savings Fund']=['medium','Investment in fixed income (debt and money market instruments) as well as equity and equity related securities']
mutual_funds_details['ICICI Prudential Bluechip Fund']=['long','A focused large cap equity fund that aims for growth by investing in companies belonging to large cap domain']
mutual_funds_details['Kotak Standard Multicap Fund']=['long','Investment in portfolio of predominantly equity & equity related securities generally focused on a few selected sectors across market capitalization']
mutual_funds_details['DSP Midcap Fund']=['long','Investment in equity and equity related securities of pre dominantly mid cap companies']
mutual_funds_details['UTI Mid Cap']=['long','Investment predominantly in mid cap companies']
mutual_funds_details['Aditya Birla Sun Life India GenNext Fund']=['long','Investment in diversified portfolio predominantly consisting of equity and equity related instruments of large cap companies']
mutual_funds_details['DSP Global Allocation Fund']=['long','Investments in units of overseas funds which invest in equity, debt and short-term securities of issuers around the world']
mutual_funds_details['Franklin India Smaller Companies Fund']=['long','A fund that invests primarily in small cap companies']
mutual_funds_details['HDFC Equity Fund']=['long','Investment predominantly in equity and equity-related instruments of medium to large-sized companies']
mutual_funds_details['HSBC Infrastructure Equity Fund']=['long','Investment in equity and equity-related securities, primarily in themes that play an important role in India’s economic development']
mutual_funds_details['HDFC Small Cap Fund']=['long','Investment predominantly in equity and equity related instruments of Small-Cap and Mid-Cap companies']
mutual_funds_details['ICICI Prudential US Bluechip Equity Fund']=['long','An open ended equity scheme primarily investing in equity and equity related securities of companies listed on recognized stock exchanges in the United States of America']
mutual_funds_details['Invesco India Global Equity Income Fund']=['long','Investment in units of Invesco Global Equity Income Fund, an overseas equity fund']

risk_list['Low']=['Aditya Birla Sun Life Overnight Fund','HSBC Overnight Fund','HSBC Cash Fund','HSBC Liquid Fund','HSBC Overnight Fund','ICICI Prudential Liquid Fund']
risk_list['Moderately Low']=['Aditya Birla Sun Life Savings Fund','HDFC Arbitrage Fund','HDFC Ultra Short Term Fund','HSBC Short Duration Fund','HDFC Short Term Debt Fund','ICICI Prudential Savings Fund','HSBC Ultra Short Duration Fund','Kotak Bond Short Term Fund']
risk_list['Moderate']=['HDFC Income Fund','HSBC Corporate Bond Fund','HSBC Flexi Debt Fund','ICICI Prudential Credit Risk Fund','IDFC Dynamic Bond Fund','L&T Triple Ace Bond Fund','ICICI Prudential Corporate Bond Fund','IDFC Corporate Bond Fund','HDFC Credit Risk Fund','Kotak Low Duration Fund']
risk_list['Moderately High']=['Aditya Birla Sun Life MNC Fund','Axis Bluechip Fund','DSP Top 100 Equity Fund','Franklin India Prima Fund','HSBC Focused Equity Fund','HDFC Gold Fund','HSBC Multi Cap Equity Fund','HSBC Regular Savings Fund','ICICI Prudential Bluechip Fund','Kotak Standard Multicap Fund','DSP Midcap Fund','UTI Mid Cap']
risk_list['High']=['Aditya Birla Sun Life India GenNext Fund','DSP Global Allocation Fund','Franklin India Smaller Companies Fund','HDFC Equity Fund','HSBC Infrastructure Equity Fund','HDFC Small Cap Fund','ICICI Prudential US Bluechip Equity Fund','Invesco India Global Equity Income Fund']

#4. HDFC Liquid Fund
#mutual_funds_details['HDFC Liquid Fund']=['short','To generate income through a portfolio comprising money market and debt instruments']
#risk_list['low'].append('HDFC Liquid Fund')

#5 HDFC Overnight Fund

# print(risk_list['Low'])
