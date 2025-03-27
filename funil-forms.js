// Dados dos funis
const funis = {
  "banho-tosa": {
    titulo: "Banho e Tosa Premium",
    steps: [
      {
        titulo: "Escolha do Serviço",
        conteudo: `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="service-option p-4 rounded-lg border border-secondary/30 hover:border-secondary cursor-pointer">
              <span class="block text-3xl mb-2">🛁</span>
              <h4 class="font-bold">Banho</h4>
              <p class="text-sm">A partir de R$ 45</p>
            </div>
            <div class="service-option p-4 rounded-lg border border-secondary/30 hover:border-secondary cursor-pointer">
              <span class="block text-3xl mb-2">✂️</span>
              <h4 class="font-bold">Tosa</h4>
              <p class="text-sm">A partir de R$ 60</p>
            </div>
            <div class="service-option p-4 rounded-lg border border-secondary/30 hover:border-secondary cursor-pointer">
              <span class="block text-3xl mb-2">✨</span>
              <h4 class="font-bold">Banho + Tosa</h4>
              <p class="text-sm">A partir de R$ 90</p>
            </div>
          </div>
        `,
      },
      {
        titulo: "Porte do Pet",
        conteudo: `
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="size-option p-4 rounded-lg border border-secondary/30 hover:border-secondary cursor-pointer">
              <span class="block text-3xl mb-2">🐕</span>
              <h4 class="font-bold">Mini</h4>
              <p class="text-sm">Até 5kg</p>
            </div>
            <div class="size-option p-4 rounded-lg border border-secondary/30 hover:border-secondary cursor-pointer">
              <span class="block text-3xl mb-2">🐕</span>
              <h4 class="font-bold">Pequeno</h4>
              <p class="text-sm">5-10kg</p>
            </div>
            <div class="size-option p-4 rounded-lg border border-secondary/30 hover:border-secondary cursor-pointer">
              <span class="block text-3xl mb-2">🐕</span>
              <h4 class="font-bold">Médio</h4>
              <p class="text-sm">10-20kg</p>
            </div>
            <div class="size-option p-4 rounded-lg border border-secondary/30 hover:border-secondary cursor-pointer">
              <span class="block text-3xl mb-2">🐕</span>
              <h4 class="font-bold">Grande</h4>
              <p class="text-sm">20kg+</p>
            </div>
          </div>
        `,
      },
      {
        titulo: "Dados do Pet",
        conteudo: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="modern-input-container">
              <div class="input-icon">🐾</div>
              <div class="input-wrapper">
                <label class="block mb-2">Nome do Pet</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">🎂</div>
              <div class="input-wrapper">
                <label class="block mb-2">Idade</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">🐕</div>
              <div class="input-wrapper">
                <label class="block mb-2">Raça</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">⚖️</div>
              <div class="input-wrapper">
                <label class="block mb-2">Peso Aproximado</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
          </div>
        `,
      },
      {
        titulo: "Dados do Tutor",
        conteudo: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="modern-input-container">
              <div class="input-icon">👤</div>
              <div class="input-wrapper">
                <label class="block mb-2">Nome Completo</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">📱</div>
              <div class="input-wrapper">
                <label class="block mb-2">WhatsApp</label>
                <input type="tel" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">📧</div>
              <div class="input-wrapper">
                <label class="block mb-2">E-mail</label>
                <input type="email" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">📍</div>
              <div class="input-wrapper">
                <label class="block mb-2">Endereço</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
          </div>
        `,
      },
      {
        titulo: "Por que nos escolher?",
        conteudo: `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="trust-card p-4 rounded-lg">
              <span class="block text-3xl mb-2">⭐</span>
              <h4 class="font-bold">Profissionais Certificados</h4>
              <p class="text-sm">Equipe altamente qualificada</p>
            </div>
            <div class="trust-card p-4 rounded-lg">
              <span class="block text-3xl mb-2">🛡️</span>
              <h4 class="font-bold">Ambiente Seguro</h4>
              <p class="text-sm">Localização e instalações seguras</p>
            </div>
            <div class="trust-card p-4 rounded-lg">
              <span class="block text-3xl mb-2">💝</span>
              <h4 class="font-bold">Cuidado Especial</h4>
              <p class="text-sm">Tratamento personalizado</p>
            </div>
          </div>
        `,
      },
      {
        titulo: "Finalização",
        conteudo: `
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-4">Está Quase Lá! 🎉</h3>
            <p class="mb-6">Clique no botão abaixo para testar o funil</p>
            <button class="neon-button test-funnel">Testar Funil</button>
          </div>
        `,
      },
    ],
  },
  especialidades: {
    titulo: "Especialidades Veterinárias",
    steps: [
      {
        titulo: "Escolha a Especialidade",
        conteudo: `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="specialty-option p-4 rounded-lg border border-secondary/30 hover:border-secondary cursor-pointer">
              <span class="block text-3xl mb-2">👨‍⚕️</span>
              <h4 class="font-bold">Clínico Geral</h4>
              <p class="text-sm">Consulta: R$ 150</p>
            </div>
            <div class="specialty-option p-4 rounded-lg border border-secondary/30 hover:border-secondary cursor-pointer">
              <span class="block text-3xl mb-2">🔬</span>
              <h4 class="font-bold">Dermatologia</h4>
              <p class="text-sm">Consulta: R$ 200</p>
            </div>
            <div class="specialty-option p-4 rounded-lg border border-secondary/30 hover:border-secondary cursor-pointer">
              <span class="block text-3xl mb-2">👁️</span>
              <h4 class="font-bold">Oftalmologia</h4>
              <p class="text-sm">Consulta: R$ 180</p>
            </div>
          </div>
        `,
      },
      {
        titulo: "Motivo da Consulta",
        conteudo: `
          <div class="modern-input-container">
            <div class="input-icon">📝</div>
            <div class="input-wrapper">
              <label class="block mb-2">Descreva o motivo da consulta</label>
              <textarea class="modern-input h-32" required></textarea>
            </div>
          </div>
        `,
      },
      {
        titulo: "Dados do Pet",
        conteudo: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="modern-input-container">
              <div class="input-icon">🐾</div>
              <div class="input-wrapper">
                <label class="block mb-2">Nome do Pet</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">🎂</div>
              <div class="input-wrapper">
                <label class="block mb-2">Idade</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">🐕</div>
              <div class="input-wrapper">
                <label class="block mb-2">Raça</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">⚖️</div>
              <div class="input-wrapper">
                <label class="block mb-2">Peso Aproximado</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
          </div>
        `,
      },
      {
        titulo: "Histórico Médico",
        conteudo: `
          <div class="modern-input-container">
            <div class="input-icon">📋</div>
            <div class="input-wrapper">
              <label class="block mb-2">Possui histórico médico relevante?</label>
              <textarea class="modern-input h-32" required></textarea>
            </div>
          </div>
        `,
      },
      {
        titulo: "Dados do Tutor",
        conteudo: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="modern-input-container">
              <div class="input-icon">👤</div>
              <div class="input-wrapper">
                <label class="block mb-2">Nome Completo</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">📱</div>
              <div class="input-wrapper">
                <label class="block mb-2">WhatsApp</label>
                <input type="tel" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">📧</div>
              <div class="input-wrapper">
                <label class="block mb-2">E-mail</label>
                <input type="email" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">📍</div>
              <div class="input-wrapper">
                <label class="block mb-2">Endereço</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
          </div>
        `,
      },
      {
        titulo: "Finalização",
        conteudo: `
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-4">Consulta Agendada! 🎉</h3>
            <p class="mb-6">Clique no botão abaixo para testar o funil</p>
            <button class="neon-button test-funnel">Testar Funil</button>
          </div>
        `,
      },
    ],
  },
  hotel: {
    titulo: "Hotel para Pets",
    steps: [
      {
        titulo: "Escolha o Período",
        conteudo: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="period-option p-4 rounded-lg border border-secondary/30 hover:border-secondary cursor-pointer">
              <span class="block text-3xl mb-2">🌅</span>
              <h4 class="font-bold">Diária</h4>
              <p class="text-sm">R$ 80/dia</p>
            </div>
            <div class="period-option p-4 rounded-lg border border-secondary/30 hover:border-secondary cursor-pointer">
              <span class="block text-3xl mb-2">🌙</span>
              <h4 class="font-bold">Pernoite</h4>
              <p class="text-sm">R$ 60/noite</p>
            </div>
          </div>
          <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="modern-input-container">
              <div class="input-icon">📅</div>
              <div class="input-wrapper">
                <label class="block mb-2">Data de Entrada</label>
                <input type="date" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">📅</div>
              <div class="input-wrapper">
                <label class="block mb-2">Data de Saída</label>
                <input type="date" class="modern-input" required />
              </div>
            </div>
          </div>
        `,
      },
      {
        titulo: "Serviços Adicionais",
        conteudo: `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="service-option p-4 rounded-lg border border-secondary/30 hover:border-secondary cursor-pointer">
              <span class="block text-3xl mb-2">🛁</span>
              <h4 class="font-bold">Banho</h4>
              <p class="text-sm">R$ 45</p>
            </div>
            <div class="service-option p-4 rounded-lg border border-secondary/30 hover:border-secondary cursor-pointer">
              <span class="block text-3xl mb-2">✂️</span>
              <h4 class="font-bold">Tosa</h4>
              <p class="text-sm">R$ 60</p>
            </div>
            <div class="service-option p-4 rounded-lg border border-secondary/30 hover:border-secondary cursor-pointer">
              <span class="block text-3xl mb-2">🏥</span>
              <h4 class="font-bold">Veterinário</h4>
              <p class="text-sm">R$ 150</p>
            </div>
          </div>
        `,
      },
      {
        titulo: "Dados do Pet",
        conteudo: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="modern-input-container">
              <div class="input-icon">🐾</div>
              <div class="input-wrapper">
                <label class="block mb-2">Nome do Pet</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">🎂</div>
              <div class="input-wrapper">
                <label class="block mb-2">Idade</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">🐕</div>
              <div class="input-wrapper">
                <label class="block mb-2">Raça</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">⚖️</div>
              <div class="input-wrapper">
                <label class="block mb-2">Peso Aproximado</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
          </div>
        `,
      },
      {
        titulo: "Dados do Tutor",
        conteudo: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="modern-input-container">
              <div class="input-icon">👤</div>
              <div class="input-wrapper">
                <label class="block mb-2">Nome Completo</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">📱</div>
              <div class="input-wrapper">
                <label class="block mb-2">WhatsApp</label>
                <input type="tel" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">📧</div>
              <div class="input-wrapper">
                <label class="block mb-2">E-mail</label>
                <input type="email" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">📍</div>
              <div class="input-wrapper">
                <label class="block mb-2">Endereço</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
          </div>
        `,
      },
      {
        titulo: "Finalização",
        conteudo: `
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-4">Reserva Confirmada! 🎉</h3>
            <p class="mb-6">Clique no botão abaixo para testar o funil</p>
            <button class="neon-button test-funnel">Testar Funil</button>
          </div>
        `,
      },
    ],
  },
  daycare: {
    titulo: "Day Care",
    steps: [
      {
        titulo: "Escolha o Plano",
        conteudo: `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="plan-option p-4 rounded-lg border border-secondary/30 hover:border-secondary cursor-pointer">
              <span class="block text-3xl mb-2">📅</span>
              <h4 class="font-bold">Diária</h4>
              <p class="text-sm">R$ 50/dia</p>
            </div>
            <div class="plan-option p-4 rounded-lg border border-secondary/30 hover:border-secondary cursor-pointer">
              <span class="block text-3xl mb-2">📅</span>
              <h4 class="font-bold">Semanal</h4>
              <p class="text-sm">R$ 200/semana</p>
            </div>
            <div class="plan-option p-4 rounded-lg border border-secondary/30 hover:border-secondary cursor-pointer">
              <span class="block text-3xl mb-2">📅</span>
              <h4 class="font-bold">Mensal</h4>
              <p class="text-sm">R$ 700/mês</p>
            </div>
          </div>
        `,
      },
      {
        titulo: "Horário de Funcionamento",
        conteudo: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="modern-input-container">
              <div class="input-icon">🌅</div>
              <div class="input-wrapper">
                <label class="block mb-2">Horário de Entrada</label>
                <input type="time" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">🌙</div>
              <div class="input-wrapper">
                <label class="block mb-2">Horário de Saída</label>
                <input type="time" class="modern-input" required />
              </div>
            </div>
          </div>
        `,
      },
      {
        titulo: "Dados do Pet",
        conteudo: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="modern-input-container">
              <div class="input-icon">🐾</div>
              <div class="input-wrapper">
                <label class="block mb-2">Nome do Pet</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">🎂</div>
              <div class="input-wrapper">
                <label class="block mb-2">Idade</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">🐕</div>
              <div class="input-wrapper">
                <label class="block mb-2">Raça</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">⚖️</div>
              <div class="input-wrapper">
                <label class="block mb-2">Peso Aproximado</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
          </div>
        `,
      },
      {
        titulo: "Dados do Tutor",
        conteudo: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="modern-input-container">
              <div class="input-icon">👤</div>
              <div class="input-wrapper">
                <label class="block mb-2">Nome Completo</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">📱</div>
              <div class="input-wrapper">
                <label class="block mb-2">WhatsApp</label>
                <input type="tel" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">📧</div>
              <div class="input-wrapper">
                <label class="block mb-2">E-mail</label>
                <input type="email" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">📍</div>
              <div class="input-wrapper">
                <label class="block mb-2">Endereço</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
          </div>
        `,
      },
      {
        titulo: "Finalização",
        conteudo: `
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-4">Inscrição Confirmada! 🎉</h3>
            <p class="mb-6">Clique no botão abaixo para testar o funil</p>
            <button class="neon-button test-funnel">Testar Funil</button>
          </div>
        `,
      },
    ],
  },
  produtos: {
    titulo: "Produtos Premium",
    steps: [
      {
        titulo: "Escolha a Categoria",
        conteudo: `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="category-option p-4 rounded-lg border border-secondary/30 hover:border-secondary cursor-pointer">
              <span class="block text-3xl mb-2">🛏️</span>
              <h4 class="font-bold">Camas</h4>
              <p class="text-sm">A partir de R$ 129</p>
            </div>
            <div class="category-option p-4 rounded-lg border border-secondary/30 hover:border-secondary cursor-pointer">
              <span class="block text-3xl mb-2">👕</span>
              <h4 class="font-bold">Roupas</h4>
              <p class="text-sm">A partir de R$ 59</p>
            </div>
            <div class="category-option p-4 rounded-lg border border-secondary/30 hover:border-secondary cursor-pointer">
              <span class="block text-3xl mb-2">🦴</span>
              <h4 class="font-bold">Brinquedos</h4>
              <p class="text-sm">A partir de R$ 29</p>
            </div>
          </div>
        `,
      },
      {
        titulo: "Escolha o Produto",
        conteudo: `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="product-option p-4 rounded-lg border border-secondary/30 hover:border-secondary cursor-pointer">
              <span class="block text-3xl mb-2">🛏️</span>
              <h4 class="font-bold">Cama Ortopédica</h4>
              <p class="text-sm">R$ 129,90</p>
            </div>
            <div class="product-option p-4 rounded-lg border border-secondary/30 hover:border-secondary cursor-pointer">
              <span class="block text-3xl mb-2">👕</span>
              <h4 class="font-bold">Roupinha Shiba</h4>
              <p class="text-sm">R$ 59,90</p>
            </div>
            <div class="product-option p-4 rounded-lg border border-secondary/30 hover:border-secondary cursor-pointer">
              <span class="block text-3xl mb-2">🦴</span>
              <h4 class="font-bold">Brinquedo Interativo</h4>
              <p class="text-sm">R$ 29,90</p>
            </div>
          </div>
        `,
      },
      {
        titulo: "Dados do Pet",
        conteudo: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="modern-input-container">
              <div class="input-icon">🐾</div>
              <div class="input-wrapper">
                <label class="block mb-2">Nome do Pet</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">🎂</div>
              <div class="input-wrapper">
                <label class="block mb-2">Idade</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">🐕</div>
              <div class="input-wrapper">
                <label class="block mb-2">Raça</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">⚖️</div>
              <div class="input-wrapper">
                <label class="block mb-2">Peso Aproximado</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
          </div>
        `,
      },
      {
        titulo: "Dados do Tutor",
        conteudo: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="modern-input-container">
              <div class="input-icon">👤</div>
              <div class="input-wrapper">
                <label class="block mb-2">Nome Completo</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">📱</div>
              <div class="input-wrapper">
                <label class="block mb-2">WhatsApp</label>
                <input type="tel" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">📧</div>
              <div class="input-wrapper">
                <label class="block mb-2">E-mail</label>
                <input type="email" class="modern-input" required />
              </div>
            </div>
            <div class="modern-input-container">
              <div class="input-icon">📍</div>
              <div class="input-wrapper">
                <label class="block mb-2">Endereço</label>
                <input type="text" class="modern-input" required />
              </div>
            </div>
          </div>
        `,
      },
      {
        titulo: "Finalização",
        conteudo: `
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-4">Compra Confirmada! 🎉</h3>
            <p class="mb-6">Clique no botão abaixo para testar o funil</p>
            <button class="neon-button test-funnel">Testar Funil</button>
          </div>
        `,
      },
    ],
  },
};

// Estado do funil
let currentFunnel = null;
let currentStep = 1;
let totalSteps = 6;

// Elementos do DOM
const funnelOptions = document.querySelectorAll(".funnel-option");
const stepsContainer = document.querySelector(".steps-container");
const prevButton = document.querySelector(".prev-step");
const nextButton = document.querySelector(".next-step");
const steps = document.querySelectorAll(".step");

// Objeto para armazenar os dados do usuário
let userData = {
  pet: {},
  tutor: {},
};

// Função para salvar dados no localStorage
function saveUserData() {
  localStorage.setItem("userData", JSON.stringify(userData));
}

// Função para carregar dados do localStorage
function loadUserData() {
  const savedData = localStorage.getItem("userData");
  if (savedData) {
    userData = JSON.parse(savedData);
  }
}

// Função para preencher campos com dados salvos
function fillSavedData() {
  // Preencher campos do pet
  Object.entries(userData.pet).forEach(([field, value]) => {
    const input = document.querySelector(
      `.modern-input[data-type="pet"][data-field="${field}"]`
    );
    if (input) {
      input.value = value;
      input.parentElement.classList.add("focused");
    }
  });

  // Preencher campos do tutor
  Object.entries(userData.tutor).forEach(([field, value]) => {
    const input = document.querySelector(
      `.modern-input[data-type="tutor"][data-field="${field}"]`
    );
    if (input) {
      input.value = value;
      input.parentElement.classList.add("focused");
    }
  });
}

// Função para atualizar dados do usuário
function updateUserData() {
  // Atualizar dados do pet
  document
    .querySelectorAll('.modern-input[data-type="pet"]')
    .forEach((input) => {
      const field = input.getAttribute("data-field");
      if (input.value.trim()) {
        userData.pet[field] = input.value;
      }
    });

  // Atualizar dados do tutor
  document
    .querySelectorAll('.modern-input[data-type="tutor"]')
    .forEach((input) => {
      const field = input.getAttribute("data-field");
      if (input.value.trim()) {
        userData.tutor[field] = input.value;
      }
    });

  saveUserData();
}

// Função para inicializar o funil
function initFunnel(funnelId) {
  currentFunnel = funis[funnelId];
  currentStep = 1;
  updateUI();
}

// Função para atualizar a UI
function updateUI() {
  if (!currentFunnel) return;

  // Atualizar título
  document.querySelector(".hero-content h1").textContent = currentFunnel.titulo;

  // Atualizar conteúdo do step atual
  const currentStepData = currentFunnel.steps[currentStep - 1];
  stepsContainer.innerHTML = `
    <div class="glass-card p-6 rounded-lg">
      <h3 class="text-xl font-bold mb-4">${currentStepData.titulo}</h3>
      ${currentStepData.conteudo}
    </div>
  `;

  // Atualizar botões de navegação
  const currentStepTitle = currentStepData.titulo;
  const stepsWithSelection = [
    "Escolha do Serviço",
    "Porte do Pet",
    "Escolha a Especialidade",
    "Escolha o Período",
    "Escolha o Plano",
    "Escolha a Categoria",
    "Escolha o Produto",
    "Serviços Adicionais",
  ];

  // Esconder botões em steps de seleção
  if (stepsWithSelection.includes(currentStepTitle)) {
    prevButton.style.display = "none";
    nextButton.style.display = "none";
  } else {
    prevButton.style.display = currentStep === 1 ? "none" : "block";
    nextButton.style.display = "block";
    nextButton.textContent =
      currentStep === totalSteps ? "Finalizar" : "Próximo";
  }

  // Atualizar steps
  steps.forEach((step, index) => {
    const stepNumber = index + 1;
    step.classList.toggle("active", stepNumber === currentStep);
    step.classList.toggle("completed", stepNumber < currentStep);
  });

  // Re-inicializar eventos
  initStepEvents();

  // Preencher dados salvos
  fillSavedData();
}

// Função para inicializar eventos do step atual
function initStepEvents() {
  // Eventos para opções de serviço
  const serviceOptions = document.querySelectorAll(
    ".service-option, .size-option, .specialty-option, .period-option, .plan-option, .category-option, .product-option"
  );

  serviceOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const parent = option.parentElement;
      const siblings = parent.querySelectorAll(
        ".service-option, .size-option, .specialty-option, .period-option, .plan-option, .category-option, .product-option"
      );
      siblings.forEach((sibling) => sibling.classList.remove("selected"));
      option.classList.add("selected");

      // Avançar automaticamente após seleção
      if (currentStep < totalSteps) {
        setTimeout(() => {
          currentStep++;
          updateUI();
        }, 500);
      }
    });
  });

  // Eventos para inputs
  const inputs = document.querySelectorAll(".modern-input");
  inputs.forEach((input) => {
    // Eventos de foco
    input.addEventListener("focus", () => {
      input.parentElement.classList.add("focused");
    });

    // Eventos de blur
    input.addEventListener("blur", () => {
      input.parentElement.classList.remove("focused");
      updateUserData();
    });

    // Eventos de input
    input.addEventListener("input", () => {
      updateUserData();
    });

    // Adicionar sugestões baseadas em dados salvos
    if (input.getAttribute("data-type") === "pet") {
      const field = input.getAttribute("data-field");
      if (userData.pet[field]) {
        input.setAttribute(
          "placeholder",
          `Último valor: ${userData.pet[field]}`
        );
      }
    } else if (input.getAttribute("data-type") === "tutor") {
      const field = input.getAttribute("data-field");
      if (userData.tutor[field]) {
        input.setAttribute(
          "placeholder",
          `Último valor: ${userData.tutor[field]}`
        );
      }
    }

    // Adicionar sugestões de email e WhatsApp
    if (input.type === "email") {
      input.setAttribute("list", "email-suggestions");
      const datalist = document.createElement("datalist");
      datalist.id = "email-suggestions";
      document.body.appendChild(datalist);

      // Adicionar emails salvos
      if (userData.tutor["E-mail"]) {
        const option = document.createElement("option");
        option.value = userData.tutor["E-mail"];
        datalist.appendChild(option);
      }

      // Adicionar emails do histórico do navegador
      if (input.form) {
        const formData = new FormData(input.form);
        for (let [key, value] of formData.entries()) {
          if (key.includes("email") && value) {
            const option = document.createElement("option");
            option.value = value;
            datalist.appendChild(option);
          }
        }
      }
    }

    if (input.type === "tel") {
      input.setAttribute("list", "whatsapp-suggestions");
      const datalist = document.createElement("datalist");
      datalist.id = "whatsapp-suggestions";
      document.body.appendChild(datalist);

      // Adicionar WhatsApps salvos
      if (userData.tutor["WhatsApp"]) {
        const option = document.createElement("option");
        option.value = userData.tutor["WhatsApp"];
        datalist.appendChild(option);
      }

      // Adicionar WhatsApps do histórico do navegador
      if (input.form) {
        const formData = new FormData(input.form);
        for (let [key, value] of formData.entries()) {
          if (
            key.includes("whatsapp") ||
            key.includes("phone") ||
            key.includes("telefone")
          ) {
            const option = document.createElement("option");
            option.value = value;
            datalist.appendChild(option);
          }
        }
      }
    }
  });

  // Eventos para campos de data
  const dateInputs = document.querySelectorAll('input[type="date"]');
  dateInputs.forEach((input) => {
    const today = new Date().toISOString().split("T")[0];
    input.min = today;
  });
}

// Event Listeners
funnelOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const funnelId = option.dataset.funnel;
    initFunnel(funnelId);

    // Atualizar seleção visual
    funnelOptions.forEach((opt) => opt.classList.remove("selected"));
    option.classList.add("selected");
  });
});

prevButton.addEventListener("click", () => {
  if (currentStep > 1) {
    currentStep--;
    updateUI();
  }
});

// Função para validar campos obrigatórios
function validateFields() {
  const requiredFields = document.querySelectorAll(
    ".modern-input[required], textarea[required]"
  );
  let isValid = true;

  // Validar campos de texto
  requiredFields.forEach((field) => {
    if (!field.value.trim()) {
      field.classList.add("error");
      isValid = false;
    } else {
      field.classList.remove("error");
    }
  });

  // Validar seleções apenas em steps específicos
  const currentStepTitle = currentFunnel.steps[currentStep - 1].titulo;
  const stepsRequiringSelection = [
    "Escolha do Serviço",
    "Porte do Pet",
    "Escolha a Especialidade",
    "Escolha o Período",
    "Escolha o Plano",
    "Escolha a Categoria",
    "Escolha o Produto",
    "Serviços Adicionais",
  ];

  if (stepsRequiringSelection.includes(currentStepTitle)) {
    const selectedOptions = document.querySelectorAll(
      ".service-option.selected, .size-option.selected, .specialty-option.selected, .period-option.selected, .plan-option.selected, .category-option.selected, .product-option.selected"
    );

    if (selectedOptions.length === 0) {
      isValid = false;
      // Mostrar mensagem de erro
      const errorMessage = document.createElement("div");
      errorMessage.className = "error-message";
      errorMessage.textContent = "Por favor, selecione uma opção";
      document.querySelector(".glass-card").appendChild(errorMessage);
      setTimeout(() => errorMessage.remove(), 3000);
    }
  }

  return isValid;
}

// Função para enviar dados para WhatsApp
function sendToWhatsApp(data) {
  const phone = "5511941431850";
  const message = encodeURIComponent(data);
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}

// Função para calcular o total
function calculateTotal(data) {
  let total = 0;

  switch (data.funnel) {
    case "Banho e Tosa Premium":
      // Soma serviço e porte
      Object.entries(data.selections).forEach(([key, value]) => {
        const price = parseFloat(
          value.replace(/[^0-9,]/g, "").replace(",", ".")
        );
        total += price;
      });
      break;

    case "Especialidades Veterinárias":
      // Soma especialidade
      Object.entries(data.selections).forEach(([key, value]) => {
        const price = parseFloat(
          value.replace(/[^0-9,]/g, "").replace(",", ".")
        );
        total += price;
      });
      break;

    case "Hotel para Pets":
      // Soma período e serviços adicionais
      Object.entries(data.selections).forEach(([key, value]) => {
        const price = parseFloat(
          value.replace(/[^0-9,]/g, "").replace(",", ".")
        );
        total += price;
      });
      break;

    case "Day Care":
      // Soma plano
      Object.entries(data.selections).forEach(([key, value]) => {
        const price = parseFloat(
          value.replace(/[^0-9,]/g, "").replace(",", ".")
        );
        total += price;
      });
      break;

    case "Produtos Premium":
      // Soma produtos
      Object.entries(data.selections).forEach(([key, value]) => {
        const price = parseFloat(
          value.replace(/[^0-9,]/g, "").replace(",", ".")
        );
        total += price;
      });
      break;
  }

  return total.toFixed(2).replace(".", ",");
}

// Função para formatar mensagem do WhatsApp
function formatWhatsAppMessage(data) {
  let message = `*Novo Pedido - ${data.funnel}*\n\n`;

  // Adicionar seleções baseado no tipo de funil
  if (Object.keys(data.selections).length > 0) {
    message += "*Seleções:*\n";

    // Formatação específica para cada tipo de funil
    switch (data.funnel) {
      case "Banho e Tosa Premium":
        // Formatar serviço e porte
        const service = Object.keys(data.selections).find((key) =>
          ["Banho", "Tosa", "Banho + Tosa"].includes(key)
        );
        const size = Object.keys(data.selections).find((key) =>
          ["Mini", "Pequeno", "Médio", "Grande"].includes(key)
        );
        if (service)
          message += `Serviço: ${service} - ${data.selections[service]}\n`;
        if (size) message += `Porte: ${size} - ${data.selections[size]}\n`;
        break;

      case "Especialidades Veterinárias":
        // Formatar especialidade
        const specialty = Object.keys(data.selections)[0];
        if (specialty)
          message += `Especialidade: ${specialty} - ${data.selections[specialty]}\n`;
        break;

      case "Hotel para Pets":
        // Formatar período e serviços adicionais
        const period = Object.keys(data.selections).find((key) =>
          ["Diária", "Pernoite"].includes(key)
        );
        const services = Object.keys(data.selections).filter((key) =>
          ["Banho", "Tosa", "Veterinário"].includes(key)
        );
        if (period)
          message += `Período: ${period} - ${data.selections[period]}\n`;
        if (services.length > 0) {
          message += "\n*Serviços Adicionais:*\n";
          services.forEach((service) => {
            message += `${service}: ${data.selections[service]}\n`;
          });
        }
        break;

      case "Day Care":
        // Formatar plano e horários
        const plan = Object.keys(data.selections)[0];
        if (plan) message += `Plano: ${plan} - ${data.selections[plan]}\n`;
        break;

      case "Produtos Premium":
        // Formatar categoria e produto
        const category = Object.keys(data.selections).find((key) =>
          ["Camas", "Roupas", "Brinquedos"].includes(key)
        );
        const product = Object.keys(data.selections).find((key) =>
          [
            "Cama Ortopédica",
            "Roupinha Shiba",
            "Brinquedo Interativo",
          ].includes(key)
        );
        if (category) message += `Categoria: ${category}\n`;
        if (product)
          message += `Produto: ${product} - ${data.selections[product]}\n`;
        break;
    }
    message += "\n";
  }

  // Adicionar dados do pet
  if (Object.keys(data.petData).length > 0) {
    message += "*Dados do Pet:*\n";
    const petFields = {
      Nome: "Nome do Pet",
      Idade: "Idade",
      Raça: "Raça",
      Peso: "Peso Aproximado",
    };

    Object.entries(petFields).forEach(([key, label]) => {
      if (data.petData[key]) {
        message += `${label}: ${data.petData[key]}\n`;
      }
    });
    message += "\n";
  }

  // Adicionar dados do tutor
  if (Object.keys(data.tutorData).length > 0) {
    message += "*Dados do Tutor:*\n";
    const tutorFields = {
      Nome: "Nome Completo",
      WhatsApp: "WhatsApp",
      "E-mail": "E-mail",
      Endereço: "Endereço",
    };

    Object.entries(tutorFields).forEach(([key, label]) => {
      if (data.tutorData[key]) {
        message += `${label}: ${data.tutorData[key]}\n`;
      }
    });
    message += "\n";
  }

  // Adicionar total
  const total = calculateTotal(data);
  message += `*Total do Pedido:* R$ ${total}\n\n`;

  // Adicionar data e hora do envio
  const now = new Date();
  const date = now.toLocaleDateString("pt-BR");
  const time = now.toLocaleTimeString("pt-BR");
  message += `*Data e Hora do Pedido:*\n${date} às ${time}`;

  return message;
}

// Função para coletar dados do formulário
function collectFormData() {
  const data = {
    funnel: currentFunnel.titulo,
    step: currentStep,
    selections: {},
    petData: {},
    tutorData: {},
  };

  // Coletar seleções
  const selectedOptions = document.querySelectorAll(
    ".service-option.selected, .size-option.selected, .specialty-option.selected, .period-option.selected, .plan-option.selected, .category-option.selected, .product-option.selected"
  );

  selectedOptions.forEach((option) => {
    const title = option.querySelector("h4").textContent;
    const price = option.querySelector("p").textContent;
    data.selections[title] = price;
  });

  // Coletar dados do pet
  document
    .querySelectorAll('.modern-input[data-type="pet"]')
    .forEach((input) => {
      const field = input.getAttribute("data-field");
      if (input.value.trim()) {
        data.petData[field] = input.value;
      }
    });

  // Coletar dados do tutor
  document
    .querySelectorAll('.modern-input[data-type="tutor"]')
    .forEach((input) => {
      const field = input.getAttribute("data-field");
      if (input.value.trim()) {
        data.tutorData[field] = input.value;
      }
    });

  return data;
}

// Atualizar função nextButton click
nextButton.addEventListener("click", () => {
  if (currentStep < totalSteps) {
    if (validateFields()) {
      currentStep++;
      updateUI();
    }
  }
});

// Atualizar função testFunnel
function testFunnel() {
  if (!validateFields()) {
    return;
  }

  const form = document.querySelector(".steps-container .glass-card");
  form.classList.add("submitting");

  // Coletar e enviar dados
  const formData = collectFormData();
  const message = formatWhatsAppMessage(formData);
  sendToWhatsApp(message);

  setTimeout(() => {
    form.classList.remove("submitting");
    showSuccessMessage(form);

    setTimeout(() => {
      const currentFunnelId = Object.keys(funis).find(
        (key) => funis[key] === currentFunnel
      );
      const funnelIds = Object.keys(funis);
      const currentIndex = funnelIds.indexOf(currentFunnelId);
      const nextIndex = (currentIndex + 1) % funnelIds.length;

      initFunnel(funnelIds[nextIndex]);

      funnelOptions.forEach((opt) => opt.classList.remove("selected"));
      funnelOptions[nextIndex].classList.add("selected");
    }, 2000);
  }, 1500);
}

// Event Listener para o botão de teste
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("test-funnel")) {
    testFunnel();
  }
});

// Carregar dados salvos ao iniciar
document.addEventListener("DOMContentLoaded", () => {
  loadUserData();
  initFunnel("banho-tosa");
});
