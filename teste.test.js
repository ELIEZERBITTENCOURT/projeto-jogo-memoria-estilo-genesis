describe("Genius Game Tests", () => {
    beforeEach(() => {
      order = [];
      clickedOrder = [];
      score = 0;
    });
  
    it("check shuffleOrder function", () => {
      shuffleOrder();
      expect(order.length).toBeGreaterThan(0);
      expect(clickedOrder.length).toBe(0);
    });
  
    it("check lightColor function", () => {
      lightColor(green, 1);
      expect(green.classList.contains("selected")).toBe(true);
    });
  
    it("check checkOrder function - game over", () => {
      order = [0, 1, 2, 3];
      clickedOrder = [0, 1, 2, 4];
      spyOn(window, "alert");
      checkOrder();
      expect(window.alert).toHaveBeenCalledWith("Pontuação: 0!\nVocê perdeu!\nClique em OK para iniciar um novo jogo");
    });
  
    it("check checkOrder function - next level", () => {
      order = [0, 1, 2, 3];
      clickedOrder = [0, 1, 2, 3];
      spyOn(window, "alert");
      checkOrder();
      expect(window.alert).toHaveBeenCalledWith("Pontuação: 1\nVocê acertou! Iniciando próximo nível");
    });
  
    it("check click function", () => {
      click(0);
      expect(clickedOrder).toEqual([0]);
      expect(green.classList.contains("selected")).toBe(true);
    });
  
    it("check createColorElement function", () => {
      let result = createColorElement(0);
      expect(result).toBe(green);
    });
  
    it("check playGame function", () => {
      spyOn(window, "alert");
      playGame();
      expect(window.alert).toHaveBeenCalledWith("Bem vindo ao Genius! Iniciando novo jogo!");
      expect(score).toBe(0);
    });
  });
  