import { render } from "@testing-library/react";
import { it, describe, expect, vi } from "vitest";
import App from "../App";
import * as exports from "../utils/documents";
import { act } from "react-dom/test-utils";
import { DocumentType } from "../utils/types";

const mockReturn = new Promise<DocumentType[]>((resolve, reject) => {
  setTimeout(() => {
    resolve([]);
  }, 300);
});

vi.spyOn(exports, "getDocuments").mockReturnValue(mockReturn);

describe("App", () => {
  it("should call getDocuments", async () => {
    await act(async () => {
      render(<App />);
    });

    expect(exports.getDocuments).toHaveBeenCalledTimes(1);
  });
});
