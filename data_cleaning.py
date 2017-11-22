import json
from pypinyin import pinyin, lazy_pinyin, Style
with open('all_cities.json','r') as f:
    datas = json.loads(f.read())
    output = {}
    city_list = {}
    for data in datas:
        # convert chinese characters to pinyin
        city_char = data['area']
        city_pinyin = ('').join(lazy_pinyin(data['area'])).capitalize()
        # Store data
        if city_pinyin in output.keys() and city_char in city_list.keys():
            continue
        else:
            if city_pinyin in city_list.values():
                city_pinyin += 'shi'
                print(city_char)
                print('---------')
            output[city_pinyin] = data
            # store all the cities in a list
            city_list[city_char] = city_pinyin
# print(len(output.items()))
# print(list(output.items())[1])
# print(len(city_list))
print(city_list)
with open('cleaned_data.json','w') as f:
    f.write(json.dumps(output))
with open('city_list.json','w') as f:
    f.write(json.dumps(city_list))
