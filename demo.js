// Função para inicializar todos os formulários
function initDemoForms() {
  // Selecionar todas as opções de serviço
  const serviceOptions = document.querySelectorAll(
    ".service-option, .specialty-option, .period-option, .plan-option, .category-option, .product-option"
  );

  // Adicionar evento de clique para seleção
  serviceOptions.forEach((option) => {
    option.addEventListener("click", () => {
      // Remover seleção anterior do mesmo grupo
      const parent = option.parentElement;
      const siblings = parent.querySelectorAll(
        ".service-option, .specialty-option, .period-option, .plan-option, .category-option, .product-option"
      );
      siblings.forEach((sibling) => sibling.classList.remove("selected"));

      // Adicionar seleção atual
      option.classList.add("selected");

      // Efeito de ripple
      const ripple = document.createElement("div");
      ripple.classList.add("ripple");
      option.appendChild(ripple);

      setTimeout(() => ripple.remove(), 1000);
    });
  });

  // Inicializar inputs modernos
  const modernInputs = document.querySelectorAll(".modern-input");
  modernInputs.forEach((input) => {
    // Efeito de foco
    input.addEventListener("focus", () => {
      input.parentElement.classList.add("focused");
    });

    input.addEventListener("blur", () => {
      input.parentElement.classList.remove("focused");
    });

    // Validação em tempo real
    input.addEventListener("input", () => {
      validateInput(input);
    });
  });

  // Inicializar botões neon
  const neonButtons = document.querySelectorAll(".neon-button");
  neonButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      // Efeito de clique
      button.classList.add("clicked");
      setTimeout(() => button.classList.remove("clicked"), 200);

      // Simular envio do formulário
      const form = button.closest(".glass-card");
      if (form) {
        form.classList.add("submitting");
        setTimeout(() => {
          form.classList.remove("submitting");
          showSuccessMessage(form);
        }, 1500);
      }
    });
  });
}

// Função para validar inputs
function validateInput(input) {
  const value = input.value.trim();
  const container = input.closest(".modern-input-container");

  if (value) {
    container.classList.add("valid");
  } else {
    container.classList.remove("valid");
  }
}

// Função para mostrar mensagem de sucesso
function showSuccessMessage(form) {
  const successMessage = document.createElement("div");
  successMessage.classList.add("success-message");
  successMessage.innerHTML = `
    <div class="success-icon">✓</div>
    <p>Formulário enviado com sucesso!</p>
  `;

  form.appendChild(successMessage);

  setTimeout(() => {
    successMessage.remove();
  }, 3000);
}

// Adicionar estilos dinâmicos
const style = document.createElement("style");
style.textContent = `
  .ripple {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%);
    border-radius: inherit;
    transform: scale(0);
    animation: ripple 1s linear;
  }
  
  @keyframes ripple {
    to {
      transform: scale(1);
      opacity: 0;
    }
  }
  
  .success-message {
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(0, 255, 136, 0.2);
    border: 1px solid var(--primary);
    border-radius: 0.5rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    animation: slideIn 0.3s ease;
  }
  
  .success-icon {
    width: 24px;
    height: 24px;
    background: var(--primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--dark);
    font-weight: bold;
  }
  
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  .submitting {
    opacity: 0.7;
    pointer-events: none;
  }
  
  .clicked {
    transform: scale(0.95);
  }
  
  .focused .input-icon {
    color: var(--secondary);
  }
  
  .valid .input-icon {
    color: var(--primary);
  }
`;

document.head.appendChild(style);

// Inicializar quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", initDemoForms);
