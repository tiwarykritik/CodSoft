import requests

def findCountry(region, keyword):
    base_url = f"https://jsonmock.hackerrank.com/api/countries/search"
    params = {
        "region": region,
        "name": keyword,
    }

    all_countries = []

    response = requests.get(base_url, params=params)

    if response.status_code == 200:
        data = response.json()
        all_countries.extend(data.get('data', []))
        total_pages = data.get('total_pages', 1)

        # Fetch data from other pages if available
        for page in range(2, total_pages + 1):
            params['page'] = page
            response = requests.get(base_url, params=params)
            if response.status_code == 200:
                data = response.json()
                all_countries.extend(data.get('data', []))

        return all_countries
    else:
        print(f"Error: Unable to fetch data. Status code: {response.status_code}")
        return None

def main():
    region = input("Enter the region: ")
    keyword = input("Enter the keyword: ")

    country_data = findCountry(region, keyword)

    if country_data:
        # Sort the countries by population first and then by name
        sorted_countries = sorted(country_data, key=lambda x: (x['population'], x['name']))

        for country in sorted_countries:
            name = country.get('name', 'Unknown Country')
            population = country.get('population', 'Unknown Population')
            print(f"{name},{population}")
    else:
        print("No data found for the given region and keyword.")

if _name_ == "_main_":
    main()