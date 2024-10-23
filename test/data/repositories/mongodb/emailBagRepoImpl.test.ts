import { describe, expect, jest, test, beforeEach } from '@jest/globals'
import EmailBagRepoImpl from "../../../../src/data/repositories/mongodb/emailBagRepoImpl";
import { CreateParams, EmailBagEntity, Query } from "../../../../src/domain/entities/emailBag.entity";
import IEmailBagRepo from "../../../../src/domain/repositories/emailBagRepo";

class MockEmailBagImpl implements IEmailBagRepo {
  isExists(name: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  create(payload: CreateParams): Promise<EmailBagEntity> {
    throw new Error("Method not implemented.");
  }
  findAll(query: Query): Promise<EmailBagEntity[]> {
    throw new Error("Method not implemented.");
  }
  findById(id: number | string): Promise<EmailBagEntity | null> {
    throw new Error("Method not implemented.");
  }
  updateOne(query: Query): Promise<EmailBagEntity | null> {
    throw new Error("Method not implemented.");
  }
  deleteById(id: number | string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}

describe('EmailBag Respository', () => {

  let mockEmailBagRepoImpl: EmailBagRepoImpl;

  beforeEach(() => {
    jest.clearAllMocks()
    mockEmailBagRepoImpl = new MockEmailBagImpl()
  })

  describe("isExists", () => {
    test("should return data", async () => {
      const expectedData: boolean = false;
      jest.spyOn(mockEmailBagRepoImpl, "isExists").mockImplementation(() => Promise.resolve(expectedData))
      await mockEmailBagRepoImpl.isExists('test');
      expect(mockEmailBagRepoImpl.isExists).toHaveBeenCalledWith(('test'))
    })
  })
})
