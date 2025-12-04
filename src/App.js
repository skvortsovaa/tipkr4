import React, { useState } from "react";

// ЛОКАЛЬНЫЕ ДАННЫЕ — КАТАЛОГ РЕЦЕПТОВ
const recipes = [
  {
    id: 1,
    title: "Паста с томатным соусом",
    category: "Основное блюдо",
    time: "25 минут",
    shortDescription: "Классическая паста с чесноком, томатами и сыром.",
    ingredients: [
      "Спагетти — 200 г",
      "Томаты в собственном соку — 300 г",
      "Чеснок — 2 зубчика",
      "Оливковое масло — 2 ст. л.",
      "Соль, перец, базилик — по вкусу",
      "Тёртый сыр — по желанию"
    ],
    steps: [
      "Отварить пасту до состояния аль денте согласно инструкции на упаковке.",
      "Разогреть масло на сковороде, обжарить измельчённый чеснок до аромата.",
      "Добавить томаты, посолить, поперчить и тушить 10–15 минут.",
      "Смешать пасту с соусом, прогреть 1–2 минуты.",
      "Подавать, посыпав тёртым сыром и свежим базиликом."
    ]
  },
  {
    id: 2,
    title: "Овсянка с фруктами",
    category: "Завтрак",
    time: "10 минут",
    shortDescription: "Быстрый полезный завтрак на молоке или воде.",
    ingredients: [
      "Овсяные хлопья — 40 г",
      "Молоко или вода — 200 мл",
      "Банан — 1 шт.",
      "Ягоды — горсть",
      "Мёд или сироп — по вкусу"
    ],
    steps: [
      "Довести молоко или воду до кипения.",
      "Добавить хлопья и варить 3–5 минут, помешивая.",
      "Переложить кашу в тарелку.",
      "Добавить нарезанный банан, ягоды и мёд по вкусу."
    ]
  },
  {
    id: 3,
    title: "Салат с курицей и огурцом",
    category: "Салат",
    time: "20 минут",
    shortDescription: "Лёгкий салат с курицей, огурцом и йогуртовой заправкой.",
    ingredients: [
      "Куриное филе — 150 г",
      "Огурец — 1–2 шт.",
      "Листья салата — несколько штук",
      "Натуральный йогурт — 2 ст. л.",
      "Соль, перец, чеснок — по вкусу"
    ],
    steps: [
      "Отварить или обжарить куриное филе, нарезать кубиками.",
      "Нарезать огурец и листья салата.",
      "Смешать йогурт с солью, перцем и измельчённым чесноком.",
      "Соединить все ингредиенты и заправить соусом."
    ]
  },
  {
    id: 4,
    title: "Запечённый картофель с травами",
    category: "Гарнир",
    time: "35 минут",
    shortDescription: "Картофель в духовке с чесноком и пряными травами.",
    ingredients: [
      "Картофель — 500 г",
      "Растительное масло — 2 ст. л.",
      "Чеснок — 2 зубчика",
      "Соль, перец, сушёные травы — по вкусу"
    ],
    steps: [
      "Разогреть духовку до 200 °C.",
      "Нарезать картофель дольками.",
      "Смешать с маслом, измельчённым чесноком, солью и травами.",
      "Выложить на противень и запекать 25–30 минут до румяной корочки."
    ]
  },
  {
    id: 5,
    title: "Шоколадный кекс в кружке",
    category: "Десерт",
    time: "5 минут",
    shortDescription: "Быстрый десерт в микроволновке за несколько минут.",
    ingredients: [
      "Мука — 3 ст. л.",
      "Какао — 1,5 ст. л.",
      "Сахар — 2 ст. л.",
      "Молоко — 3 ст. л.",
      "Растительное масло — 2 ст. л.",
      "Разрыхлитель — 1/3 ч. л."
    ],
    steps: [
      "Смешать сухие ингредиенты в кружке.",
      "Добавить молоко и масло, хорошо перемешать.",
      "Готовить в микроволновке 1–2 минуты до подъёма теста.",
      "Остудить пару минут и подавать."
    ]
  }
];

function App() {
  const [selectedId, setSelectedId] = useState(recipes[0].id);
  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  const selectedRecipe =
    recipes.find((r) => r.id === selectedId) || recipes[0];

  return (
    <div
      style={{
        minHeight: "100vh",
        margin: 0,
        background: "#FAF3E0", 
        color: "#4A3F35", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Segoe UI', system-ui, sans-serif"
      }}
    >
      <div
        style={{
          background: "#FFF7E6", 
          padding: "24px",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "900px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          border: "1px solid #E6D5B8",
          display: "grid",
          gridTemplateColumns: "1.1fr 1.6fr",
          gap: "16px"
        }}
      >
        {/* Левая колонка — список рецептов */}
        <div>
          <h1 style={{ fontSize: "22px", marginBottom: "4px" }}>
            Каталог рецептов
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: "#8C6A4A",
              marginBottom: "12px"
            }}
          >
            Локальные данные: список блюд и краткое описание.
          </p>

          <input
            type="text"
            placeholder="Поиск по названию..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: "10px",
              border: "1px solid #D8C3A5",
              backgroundColor: "#FFFFFF",
              color: "#4A3F35",
              fontSize: "14px",
              marginBottom: "12px",
              outlineColor: "#C97C5D"
            }}
          />

          <div
            style={{
              maxHeight: "320px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              paddingRight: "4px"
            }}
          >
            {filteredRecipes.map((recipe) => (
              <button
                key={recipe.id}
                onClick={() => setSelectedId(recipe.id)}
                style={{
                  textAlign: "left",
                  borderRadius: "10px",
                  border:
                    recipe.id === selectedId
                      ? "2px solid #C97C5D"
                      : "1px solid #E6D5B8",
                  backgroundColor:
                    recipe.id === selectedId ? "#FFE8D6" : "#FFFFFF",
                  padding: "12px 14px",
                  cursor: "pointer",
                  transition: "0.2s",
                  boxShadow:
                    recipe.id === selectedId
                      ? "0 4px 12px rgba(0,0,0,0.1)"
                      : "none"
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    marginBottom: "4px"
                  }}
                >
                  {recipe.title}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#7C6A5A",
                    marginBottom: "4px"
                  }}
                >
                  {recipe.shortDescription}
                </div>
                <div style={{ fontSize: "11px", color: "#B0825C" }}>
                  {recipe.category} • {recipe.time}
                </div>
              </button>
            ))}

            {filteredRecipes.length === 0 && (
              <div style={{ fontSize: "13px", color: "#9c7b5c" }}>
                Ничего не найдено. Измените запрос поиска.
              </div>
            )}
          </div>
        </div>

        {/* Правая колонка — подробный рецепт */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "12px",
            padding: "20px",
            border: "1px solid #E6D5B8",
            overflowY: "auto",
            maxHeight: "380px",
            marginTop: "16px",
            marginLeft: "24px",
            color: "#4A3F35"
          }}
        >
          <div
            style={{
              fontSize: "20px",
              fontWeight: 700,
              marginBottom: "6px",
              color: "#C97C5D"
            }}
          >
            {selectedRecipe.title}
          </div>
          <div
            style={{
              fontSize: "13px",
              color: "#8C6A4A",
              marginBottom: "10px"
            }}
          >
            {selectedRecipe.category} • {selectedRecipe.time}
          </div>

          <div style={{ fontSize: "14px", marginBottom: "8px" }}>
            {selectedRecipe.shortDescription}
          </div>

          <h3
            style={{
              fontSize: "14px",
              marginTop: "10px",
              marginBottom: "4px",
              color: "#4A3F35"
            }}
          >
            Ингредиенты:
          </h3>
          <ul
            style={{
              paddingLeft: "18px",
              fontSize: "14px",
              marginBottom: "8px",
              color: "#4A3F35"
            }}
          >
            {selectedRecipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3
            style={{
              fontSize: "14px",
              marginTop: "10px",
              marginBottom: "4px",
              color: "#4A3F35"
            }}
          >
            Шаги приготовления:
          </h3>
          <ol
            style={{
              paddingLeft: "18px",
              fontSize: "14px",
              color: "#4A3F35"
            }}
          >
            {selectedRecipe.steps.map((step, index) => (
              <li key={index} style={{ marginBottom: "4px" }}>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
