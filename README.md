
# YourStore ## https://your-store-7hlx2c398-trubitsynegor.vercel.app/

## Проэкт разработан в учебных целях! 

## Используемые технологи: NextJS, React, ReduxToolkit, TypeScript, Sass(+module), firebase, API[https://fakestoreapi.com/]

1. ***База NextJS.*** 
- Роутинг, получение ***props*** и ***path***
	при помощи ***getStaticProps*** и ***getStaticPaths***соответственно.
- **Dynamic paths** Использованны для получения страниц:
- **ProductsDetails** - использовал ***ID*** из полученного API
- **UserProfile** - использовал ***email*** Пользователя обрезанный до знака '@'

2. ***React*** - Лежит в основе NextJS. Использовал все базовые фичи.
					
3. ***Redux-Toolkit.js***
	1. **createAsyncThunk** - использовал для получения данных с ***API*** 
с последующей обработкой по мере необходимой логики, c дальнейшим добавление в **state**
c помощью ***extraReducers***. Все это делалось Асинхронно с целью набить нужные навыки:
	- Получение и отображение всех **Products**
	- Поиск **Products**
	- Удаление товаров из **Cart**
	- Получение **Categories**
	2. По классике все разбито на ***Slice*** 
	- **categoriesSlice** action **createAsyncThunk** на получение, и один **extraReducer**
	для добавления в state
	- **productsSlice** тут то и происходит вся "Вкуснятина" 
		- ***getAllProducts*** Получить, добавить в state on fulfilled
		- ***getSearchedProduct*** аргументом получаем value для поиска подстроки в строке, 
		получаем все **Products** и фильтруем.
		далее в **extraReducer** на fulfilled добавляем нужные **Products**
		- ***addProductToCart*** Получаем **id** в параметры, фильтруем по **id** добавляем в ***Cart***,
		!Не забываем сделать проверку при добавлении в **state** на наличие товаров в **Cart**
		- ***removeProduct*** Получаем **id** в параметры, фильтруем по **id** удаляем нужный. Обновляем **State**
	  - Остальная логика завязанная на стандартных **Actions** думаю без описания понятно за что они отвечают
		[ addCount, deleteCount, increasePrice, decreasePrice, decreasePriceWithRemove, clearCart ]

