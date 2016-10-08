import { AWQLinator } from "./../src/AWQLinator";
import { expect } from "chai";

describe("AWQLinator", () => {
  it("correctly orders the FROM clause", () => {
    const awqlinator = new AWQLinator("ACCOUNT_PERFORMANCE_REPORT");
    const report = awqlinator.select("Clicks", "Impressions").where("Clicks", ">", "20");
    const result = report.toAwql();

    expect(result).to.eql(
      "SELECT Clicks,Impressions FROM ACCOUNT_PERFORMANCE_REPORT WHERE Clicks > 20"
    );
  });

  it("correctly orders the SELECT clause", () => {
    const awqlinator = new AWQLinator("ACCOUNT_PERFORMANCE_REPORT");
    const report = awqlinator.where("Clicks", ">", "20").select("Clicks", "Impressions");
    const result = report.toAwql();

    expect(result).to.eql(
      "SELECT Clicks,Impressions FROM ACCOUNT_PERFORMANCE_REPORT WHERE Clicks > 20"
    );
  });

  it("does not change ordering for clauses where precedence does not matter", () => {
    const awqlinator = new AWQLinator("ACCOUNT_PERFORMANCE_REPORT");
    const report = awqlinator
      .select("Clicks", "Impressions")
      .where("Clicks", ">", "20")
      .during("TODAY");
    const result = report.toAwql();

    expect(result).to.eql(
      "SELECT Clicks,Impressions FROM ACCOUNT_PERFORMANCE_REPORT WHERE Clicks > 20 DURING TODAY"
    );
  });
});
