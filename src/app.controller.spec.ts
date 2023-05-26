import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { commonOneParam, noCommonOneParam, searchByThreeParams, searchByTwoParams } from './testObjects';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('Search with one no common param', () => {
    it('should return as many matches as possible', async () => {
      const response = await appController.getHello({param:"harina"});
      expect(response).toMatchObject(noCommonOneParam);
    });
  });

  describe('Search with one common param', () => {
    it('should return as many matches as possible', async () => {
      const response = await appController.getHello({param:"arroz"});
      expect(response).toMatchObject(commonOneParam);
    });
  });

  describe('Search with two params', () => {
    it('should return as many matches as possible', async () => {
      const response = await appController.getHello({param:"arroz", param1:"harina"});
      expect(response).toMatchObject(searchByTwoParams);
    });
  });

  describe('Search with three params', () => {
    it('should return as many matches as possible', async () => {
      const response = await appController.getHello({param:"arroz", param1:"harina", param2:"papa"});
      expect(response).toMatchObject(searchByThreeParams);
    });
  });
});
